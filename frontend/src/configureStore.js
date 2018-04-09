import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { operationsReducer } from './operations.reducer';

const rootReducer = combineReducers({
  operations: operationsReducer,
  router: routerReducer,
});

const epicMiddleware = createEpicMiddleware(combineEpics());

export const history = createHistory();
const middleware = routerMiddleware(history);

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(middleware, epicMiddleware),
  );

  return store;
};
