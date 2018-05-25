const InitialState = {
    users: [],
    bookings: [],
    parkingAreas: [],
    selectedParking: undefined,
    parkingSlots: [],
    feedbacks: []
}

export const AdminReducer = (state = InitialState, action) => {
    switch(action.type){
        case 'USERS':
            return {...state, users: action.payload}
        case 'PARKINGS_LIST':
            return {...state, parkingAreas: action.payload}
        case 'ADMIN_SELECTED_PARKING':
            return {...state, selectedParking: action.payload}
        case 'PARKING_DISSELECT':
            return {...state, selectedParking: undefined}
        case 'ADMIN_PARKING_SLOTS':
            return {...state, parkingSlots: action.payload}
        case 'BOOKINGS_LIST':
            return {...state, bookings: action.payload}
        case 'FEEDBACKS':
            return {...state, feedbacks: action.payload}
        case 'LOGOUT':
            return {...InitialState}
        default:
            return state
    }
}