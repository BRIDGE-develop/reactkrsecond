import { createStore, applyMiddleware, compose, combineReducers, DeepPartial } from "redux";
import penderMiddleware from 'redux-pender';
import * as moduels from './modules';

const reducers = combineReducers(moduels);
const middlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = (preloadedState: DeepPartial<T>) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;