import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import characterReducer from './characterReducer';

const reducer = combineReducers({
  characters: characterReducer,
});

const middlewares = [thunk, logger];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export default store;
