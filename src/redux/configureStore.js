import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = combineReducers({});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
