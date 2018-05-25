<<<<<<< HEAD
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {AuthReducer} from './reducers/authReducer';
import {DonorReducer} from './reducers/donorReducer';

const middleware = compose(applyMiddleware(thunk));

const reducers = combineReducers({
    AuthReducer,
    DonorReducer
})

export const store = createStore(
    reducers,
    middleware
);

store.subscribe(() => {
    console.log("store",store.getState());
=======
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {AuthReducer} from './reducers/authReducer';
import {DonorReducer} from './reducers/donorReducer';

const middleware = compose(applyMiddleware(thunk));

const reducers = combineReducers({
    AuthReducer,
    DonorReducer
})

export const store = createStore(
    reducers,
    middleware
);

store.subscribe(() => {
    // console.log("store",store.getState());
>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
})