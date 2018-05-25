import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import './index.css';
import Routes from './Routes';
import {store, persistor} from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
