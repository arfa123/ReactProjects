import {combineReducers} from 'redux';
import {AuthReducer} from './authReducer';
import {AdminReducer} from './adminReducer';
import {UserReducer} from './userReducer';

export const Reducers = combineReducers({
    AuthReducer,
    AdminReducer,
    UserReducer
})