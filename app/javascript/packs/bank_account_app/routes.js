import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';
import BankAccountNew from './components/bank_accounts/new';

const App = (props) => (
  <Router>
    <Route exact path='/' component={LandingPage} />
    <Route path="bank_accounts">
      <Route path="new" component={BankAccountNew} />
    </Route>
  </Router>
);

export default App;
