import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
    </div>
  </Router>
);

export default App;
