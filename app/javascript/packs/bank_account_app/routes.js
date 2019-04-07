import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';

const App = (props) => (
  <Router>
    <Route exact path='/' component={LandingPage} />
  </Router>
);

export default App;
