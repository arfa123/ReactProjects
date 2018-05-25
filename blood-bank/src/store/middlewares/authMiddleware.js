<<<<<<< HEAD
import {firebaseApp} from '../../firebaseApp';
import {AuthAction} from '../actions/authAction';

export class FirebaseAuthService{
    static registerUser(user){
        return (dispatch) => {
            firebaseApp.auth().createUserWithEmailAndPassword(user.email,user.pass)
            .then((userResponse) => {
                FirebaseAuthService.createUserWithUid(dispatch,user,userResponse)
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(AuthAction.signupReject(error))
            })
        }
    }
    static createUserWithUid(dispatch,user,userResponse){
        delete user.pass;
        firebaseApp.database().ref('/').child('Users/' + userResponse.uid).set(user)
        .then(() => {
            dispatch(AuthAction.signupSuccess(user))
        })
    }
    static loginUser(user){
        return (dispatch) => {
            firebaseApp.auth().signInWithEmailAndPassword(user.email,user.pass)
            .then((userResponse) => {
                FirebaseAuthService.getUser(dispatch,userResponse)
            })
            .catch((error) => {
                dispatch(AuthAction.loginReject(error))
            })
        }
    }
    static getUser(dispatch,userResponse){
        firebaseApp.database().ref('/').child('Users/' + userResponse.uid)
        .once('value', (snap) => {
            dispatch(AuthAction.loginSuccess(snap.val()))
        })
    }
    static logout(){
        return(dispatch) => {
            firebaseApp.auth().signOut()
            .then(() => {
                dispatch(AuthAction.logoutSuccess())
            })
            .catch((error) => {
                dispatch(AuthAction.logoutReject(error))
            })
        }
    }
    static addDonorToDatabase(donor){
        return(dispatch) => {
            let user = firebaseApp.auth().currentUser
            if(user !== null){
                firebaseApp.database().ref('/').child('Donors/' + user.uid).set(donor)
                firebaseApp.database().ref('/').child('Users/' + user.uid + '/donor').set(true)
                FirebaseAuthService.getUser(dispatch,user)
            }
        }
    }
    static getDonorsList(){
        return (dispatch) => {
            firebaseApp.database().ref('/').child('Donors')
            .once('value', (snap) => {
                dispatch(AuthAction.donorList(snap.val()))
            })
        }
    }
    static loader(){
        return (dispatch) => {
            console.log("loading")
            dispatch(AuthAction.loading())
        }
    }
    static removeFromDonor(){
        return (dispatch) => {
            let user = firebaseApp.auth().currentUser;
            if(user !== null){
                firebaseApp.database().ref('/').child('Donors/' + user.uid).remove()
                firebaseApp.database().ref('/').child('Users/' + user.uid + '/donor').set(false)
                FirebaseAuthService.getUser(dispatch,user)
            }
        }
    }
=======
import {firebaseApp} from '../../firebaseApp';
import {AuthAction} from '../actions/authAction';

export class FirebaseAuthService{
    static registerUser(user){
        return (dispatch) => {
            firebaseApp.auth().createUserWithEmailAndPassword(user.email,user.pass)
            .then((userResponse) => {
                FirebaseAuthService.createUserWithUid(dispatch,user,userResponse)
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(AuthAction.signupReject(error))
            })
        }
    }
    static createUserWithUid(dispatch,user,userResponse){
        delete user.pass;
        firebaseApp.database().ref('/').child('Users/' + userResponse.uid).set(user)
        .then(() => {
            console.log('user',user);
            dispatch(AuthAction.signupSuccess(user))
        })
    }
    static loginUser(user){
        return (dispatch) => {
            firebaseApp.auth().signInWithEmailAndPassword(user.email,user.pass)
            .then((userResponse) => {
                FirebaseAuthService.getUser(dispatch,userResponse)
            })
            .catch((error) => {
                dispatch(AuthAction.loginReject(error))
            })
        }
    }
    static getUser(dispatch,userResponse){
        firebaseApp.database().ref('/').child('Users/' + userResponse.uid)
        .once('value', (snap) => {
            dispatch(AuthAction.loginSuccess(snap.val()))
        })
    }
    static logout(){
        return(dispatch) => {
            firebaseApp.auth().signOut()
            .then(() => {
                dispatch(AuthAction.logoutSuccess())
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(AuthAction.logoutReject(error))
            })
        }
    }
    static addDonorToDatabase(donor){
        return(dispatch) => {
            let user = firebaseApp.auth().currentUser
            if(user !== null){
                firebaseApp.database().ref('/').child('Donors/' + user.uid).set(donor)
                // dispatch(AuthAction.donorSuccess(donor))
                // FirebaseAuthService.getDonorsList()
            }
        }
    }
    static getDonorsList(){
        return (dispatch) => {
            firebaseApp.database().ref('/').child('Donors')
            .once('value', (snap) => {
                dispatch(AuthAction.donorList(snap.val()))
            })
        }
    }
>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
}