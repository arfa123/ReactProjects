<<<<<<< HEAD
import {AuthAction} from '../actions/authAction';

const initialState = {
    authUser: {},
    isRegistered: false,
    isLogin: false,
    isError: false,
    errorMessage: {},
    loader: false
}

export const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case AuthAction.LOADING:
            return Object.assign({}, initialState, {loader: true})
        case AuthAction.SIGNUP:
            return Object.assign({}, initialState, {isRegistered: true, authUser: action.value})
        case AuthAction.SIGNUP_REJECT:
            return Object.assign({}, initialState, {isError: true, errorMessage: action.value})
        case AuthAction.LOGIN:
            return Object.assign({}, initialState, {isLogin: true, authUser: action.value})
        case AuthAction.LOGIN_REJECT:
            return Object.assign({}, initialState, {isError: true, errorMessage: action.value})
        case AuthAction.LOGOUT:
            return Object.assign({}, initialState, {isLogin: false, authUser: {}})
        case AuthAction.LOGOUT_REJECT:
            return Object.assign({}, initialState, {isError: true, errorMessage: action.value})
        default:
            return state
    }
=======
import {AuthAction} from '../actions/authAction';

const initialState = {
    authUser: {},
    isRegistered: false,
    isLogin: false,
    isError: false,
    errorMessage: {}
}

export const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case AuthAction.SIGNUP:
            return Object.assign({}, initialState, {isRegistered: true, authUser: action.value})
        case AuthAction.SIGNUP_REJECT:
            return Object.assign({}, initialState, {isError: true, errorMessage: action.value})
        case AuthAction.LOGIN:
            return Object.assign({}, initialState, {isLogin: true, authUser: action.value})
        case AuthAction.LOGIN_REJECT:
            return Object.assign({}, initialState, {isError: true, errorMessage: action.value})
        case AuthAction.LOGOUT:
            return Object.assign({}, initialState, {isLogin: false, authUser: {}})
        case AuthAction.LOGOUT_REJECT:
            return Object.assign({}, initialState, {isError: true, errorMessage: action.value})
        // case AuthAction.DONOR:
        //     return Object.assign({}, state, {authUser: action.value})
        default:
            return state
    }
>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
}