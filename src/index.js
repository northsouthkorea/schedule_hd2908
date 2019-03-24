import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers,createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from 'App';
import counter from 'modules/counterModule';

const rootReducer = combineReducers({
    counter
});
const store = createStore(rootReducer);
const appElement = document.getElementById('root');



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);