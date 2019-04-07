import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { configureBankAccountStore } from './redux/store/configure_store'

const store = configureBankAccountStore();

document.addEventListener('DOMContentLoaded', () => {
  const wrappedRoutes = <Provider store={store}><Routes/></Provider>;
  ReactDOM.render(wrappedRoutes, document.getElementById("bank-account-app"));
});
