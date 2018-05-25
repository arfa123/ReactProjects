const InitialState = {
    parkings: [],
    parkingSlots: [],
    selectedParking: undefined,
    selectedDate: undefined,
    bookings: [],
    feedbacks: []
}

export const UserReducer = (state = InitialState, action) => {
    switch(action.type){
        case 'PARKINGS':
            return {...state, parkings: action.payload}
        case 'SELECTED_PARKING':
            return {...state, selectedParking: action.payload, selectedDate: undefined}
        case 'SELECTED_DATE':
            return {...state, selectedDate: action.payload}
        case 'PARKING_SLOTS':
            return {...state, parkingSlots: action.payload}
        case 'USER_BOOKINGS':
            return {...state, bookings: action.payload}
        case 'PARKING_DISSELECT':
            return{...state, selectedParking: undefined, selectedDate: undefined}
        case 'USER_FEEDBACKS':
            return {...state, feedbacks: action.payload}
        case 'LOGOUT':
            return {...InitialState}
        default:
            return state
    }
}