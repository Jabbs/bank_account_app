import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import bankAccountReducer from '../reducers/bank_account';

import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';


const configureStore = (reducer) => () => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(browserHistory)];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
};

const configureBankAccountStore = configureStore(bankAccountReducer);

export { configureBankAccountStore };
