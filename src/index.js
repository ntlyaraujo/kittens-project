import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchKitties, requestKitties } from './reducers';
import './index.css';

const logger = createLogger();
const rootReducer = combineReducers({searchKitties,requestKitties});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
    /*<Provider> Makes the Redux store available 
    to the connect() calls in the component hierarchy below.*/
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
