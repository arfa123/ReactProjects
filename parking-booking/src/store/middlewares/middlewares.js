import {firebaseApp} from '../../firebaseApp';
import * as AuthAction from '../actions/authAction';
import * as AdminAction from '../actions/adminAction';
import * as UserAction from '../actions/userAction';

export class Middleware{
    static signupUser = (user) => {
        return (dispatch) => {
            firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userRes) => {
                userRes.updateProfile({
                    displayName: user.name
                })
                .then(() => {
                    let User = {
                        name: userRes.displayName,
                        email: userRes.email,
                        uid: userRes.uid
                    }
                    console.log("userRes:",userRes.displayName)
                    Middleware.createUserWithUid(dispatch, User)
                })
                .catch((error) => {
                    console.log("Error:",error)
                })
            })
            .catch((error) => {
                dispatch(AuthAction.signupReject(error))
            })
        }
    }
    static createUserWithUid = (dispatch, User) => {
        firebaseApp.database().ref(`Users/${User.uid}`).set(User)
        .then(() => {
            dispatch(AuthAction.signupSuccess(User))
        })
    }
    static loginUser = (user) => {
        return (dispatch) => {
            firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userRes) => {
                let User = {
                    name: userRes.displayName,
                    email: userRes.email,
                    uid: userRes.uid
                }
                dispatch(AuthAction.loginSuccess(User))
            })
            .catch((error) => {
                dispatch(AuthAction.loginReject(error))
            })
        }
    }
    static signout = () => {
        return (dispatch) => {
            firebaseApp.auth().signOut()
            .then(() => {
                dispatch(AuthAction.logoutSuccess)
            })
            .catch((error) => {
                dispatch(AuthAction.logoutReject(error))
            })
        }
    }
    static getUsers = () => {
        return (dispatch) => {
            let users = []
            firebaseApp.database().ref(`Users/`).on('value', (snap) => {
                if(snap.val() !== null){
                    users = Object.values(snap.val())
                }
                dispatch(AdminAction.usersList(users))
            })
        }
    }
    static saveUser = (user) => {
        return (dispatch) => {
            console.log("uid:",user)
            firebaseApp.database().ref(`Users/${user.uid}`).set(user)
            .then(() => {
                dispatch(UserAction.userSaved(user))
            })
        }
    }
    static getParkings = () => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings`).on('value', (snap) => {
                dispatch(UserAction.parkings(Object.getOwnPropertyNames(snap.val())))
            })
        }
    }
    static getParkingSlots = (parkingName) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings/${parkingName}`).on('value', (snap) => {
                dispatch(UserAction.parkingSlots(Object.values(snap.val())))
            })
        }
    }
    static parkingBooked = (parkingName,slotno,user,date) => {
        return (dispatch) => {
            let booking = {
                slotno: slotno,
                bookedBy: user,
                date: date,
                parkingName: parkingName
            }
            firebaseApp.database().ref(`Parkings/${parkingName}/s${slotno}/bookings`).push(booking)
            .then((snap) => {
                let bookingKey = snap.key
                let userBooking = {
                    parkingName: parkingName,
                    slotno: slotno,
                    date: date
                }
                firebaseApp.database().ref(`Users/${user.uid}/bookings/${bookingKey}`).set(userBooking)
                .then(() => {
                    firebaseApp.database().ref(`Parkings/${parkingName}`).on('value', (snap) => {
                        console.log("slots", snap.val())
                        dispatch(UserAction.parkingSlots(Object.values(snap.val())))
                    })
                })
            })
        }
    }
    static userBookings = (uid) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Users/${uid}/bookings`).on('value', (snap) => {
                if(snap.val() !== null){
                    dispatch(UserAction.userBookings(Object.entries(snap.val())))
                }
                else{
                    dispatch(UserAction.userBookings([]))
                }
            })
        }
    }
    static cancelBooking = (bookingId,parkingName,slotno,uid) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings/${parkingName}/s${slotno}/bookings/${bookingId}`).remove()
            .then(() => {
                firebaseApp.database().ref(`Users/${uid}/bookings/${bookingId}`).remove()
                    .then(() => {
                        firebaseApp.database().ref(`Users/${uid}/bookings`).on('value', (snap) => {
                            if(snap.val() !== null){
                                dispatch(UserAction.userBookings(Object.entries(snap.val())))
                            }
                            else{
                                dispatch(UserAction.userBookings([]))
                            }
                        })
                    })
                })
            }
    }
    static getUserFeedbacks = (userId) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Feedbacks/${userId}`).on('value', (snap) => {
                if(snap.val() !== null){
                    console.log("feeds",snap.val())
                    dispatch(UserAction.userFeedbacks(Object.values(snap.val())))
                }
            })
        }
    }
    static sendFeedback = (feedback,user) => {
        return (dispatch) => {
            let feed = {
                feedback: feedback,
                sender: user
            }
            firebaseApp.database().ref(`Feedbacks/${user.uid}`).push(feed)
            .then(() => {
                firebaseApp.database().ref(`Feedbacks/${user.uid}`).on('value', (snap) => {
                    console.log("feed",snap.val())
                    dispatch(UserAction.userFeedbacks(Object.values(snap.val())))
                })
            })
        }
    }
    // <------------------------ADMIN FUNCTIONS------------------------>
    static getParkingsAdmin = () => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings/`).on('value', (snap) => {
                dispatch(AdminAction.parkings(Object.getOwnPropertyNames(snap.val())))
            })
        }
    }
    static getParkingSlotsAdmin = (parkingName) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings/${parkingName}`).on('value', (snap) => {
                dispatch(AdminAction.parkingSlots(Object.getOwnPropertyNames(snap.val())))
            })
        }
    } 
    static getBookingsAdmin = (parkingName) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings/${parkingName}`).on('value', (snap) => {
                let keys = Object.getOwnPropertyNames(snap.val())
                console.log("hello",keys)
                let bookings = []
                keys.map((x,y) => {
                    firebaseApp.database().ref(`Parkings/${parkingName}/${x}/bookings`).on('value', (snap) => {
                        if(snap.val() !== null){
                            bookings.push(Object.entries(snap.val()))
                        }
                    })
                })
                dispatch(AdminAction.bookingsList(bookings))
            })
        }
    }
    static cancelBookingByAdmin = (bookingId, parkingName, slotno, userId) => {
        return (dispatch) => {
            firebaseApp.database().ref(`Parkings/${parkingName}/s${slotno}/bookings/${bookingId}`).remove()
            .then(() => {
                firebaseApp.database().ref(`Users/${userId}/bookings/${bookingId}`).remove()
                .then(() => {
                    firebaseApp.database().ref(`Parkings/${parkingName}`).on('value', (snap) => {
                        let keys = Object.getOwnPropertyNames(snap.val())
                        console.log("hello",keys)
                        let bookings = []
                        keys.map((x,y) => {
                            firebaseApp.database().ref(`Parkings/${parkingName}/${x}/bookings`).on('value', (snap) => {
                                if(snap.val() !== null){
                                    bookings.push(Object.entries(snap.val()))
                                }
                            })
                        })
                        dispatch(AdminAction.bookingsList(bookings))
                    })
                })
            })
        }
    }
    static getFeedbacks = () => {
        return (dispatch) => {
            firebaseApp.database().ref(`Feedbacks/`).on('value', (snap) => {
                // console.log("feedbacks",Object.values(snap.val()))
                dispatch(AdminAction.feedbacks(Object.values(snap.val())))
            })
        }
    }
}