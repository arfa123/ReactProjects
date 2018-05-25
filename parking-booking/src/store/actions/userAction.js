export const userSaved = (user) => {
    return{
        type: 'USER_SAVED',
        payload: user
    }
}
export const parkings = (parkings) => {
    return{
        type: 'PARKINGS',
        payload: parkings
    }
}
export const selectedParking = (parking) => {
    return{
        type: 'SELECTED_PARKING',
        payload: parking
    }
}
export const parkingSlots = (slots) => {
    return{
        type: 'PARKING_SLOTS',
        payload: slots
    }
}
export const selectedDate = (date) => {
    return{
        type: 'SELECTED_DATE',
        payload: date
    }
}
export const userBookings = (bookings) => {
    return{
        type: 'USER_BOOKINGS',
        payload: bookings
    }
}
export const userFeedbacks = (feedbacks) => {
    return{
        type: 'USER_FEEDBACKS',
        payload: feedbacks
    }
}