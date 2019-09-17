import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import penderMiddleware from 'redux-pender';
import * as moduels from './modules';

const reducers = combineReducers(moduels);
const middlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
// const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const devtools = isDev;
// const composeEnhancers = devtools || compose;
const composeEnhancers = compose;

const configure = (preloadedState?: any) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;