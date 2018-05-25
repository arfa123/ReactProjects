export const usersList = (users) => {
    return{
        type: 'USERS',
        payload: users
    }
}
export const parkings = (parkings) => {
    return{
        type: 'PARKINGS_LIST',
        payload: parkings
    }
}
export const selectedParking = (parking) => {
    return{
        type: 'ADMIN_SELECTED_PARKING',
        payload: parking
    }
}
export const parkingSlots = (slots) => {
    return{
        type: 'ADMIN_PARKING_SLOTS',
        payload: slots
    }
}
export const bookingsList = (bookings) => {
    return{
        type: 'BOOKINGS_LIST',
        payload: bookings
    }
}
export const disselectParking = {
    type: 'PARKING_DISSELECT'
}
export const feedbacks = (feedbacks) => {
    return{
        type: 'FEEDBACKS',
        payload: feedbacks
    }
}