import React from 'react';
import {renderToString} from 'react-dom/server';
// import { Provider } from 'react-redux';
// import configureStore from './redux/configureStore';
import App from './App';

module.exports = function render(initialState) {
    // Model the initial state
    // const store = configureStore(initialState);
    return renderToString(<App/>)
    // const preloadedState = store.getState();
    // return {
    //     content,
    //     preloadedState
    // };
};