import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Reducers} from './reducers';

const persistConfig = {
    key: 'root',
    storage: storage
}
const reducerWithPersist = persistReducer(persistConfig, Reducers)

export const store = createStore(reducerWithPersist, applyMiddleware(thunk))
export const persistor = persistStore(store)