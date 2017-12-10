import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { i18n } from 'redux-pagan';

import history from '../libs/History';

const rootReducers = combineReducers({
  i18n,
  routing: routerReducer
});

const middlewares = [thunk, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'prod') {
  middlewares.push(createLogger());
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducers);

export default store;
