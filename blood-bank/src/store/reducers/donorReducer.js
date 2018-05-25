<<<<<<< HEAD
import {AuthAction} from '../actions/authAction';

const donorList = [];

export const DonorReducer = (state = donorList, action) => {
    switch(action.type){
        case AuthAction.DONOR_LIST:
            return Object.values(action.value)
        default:
            return state
    }
=======
import {AuthAction} from '../actions/authAction';

const donorList = [];

export const DonorReducer = (state = donorList, action) => {
    switch(action.type){
        case AuthAction.DONOR_LIST:
            return Object.values(action.value)
        default:
            return state
    }
>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
}