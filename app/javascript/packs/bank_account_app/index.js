import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Routes />, document.getElementById("bank-account-app"),
  )
});
