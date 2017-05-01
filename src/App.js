import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/home';
import Resources from './components/resources';
import Book from './components/book';
import Map from './components/map';
import './assets/App.css';

const RouterComponent = () => (
  <Router>
    <div>
      <div className="nav-container">
        <div className="nav-link"><Link to="/">Home</Link></div>
        <div className="nav-link"><Link to="/resources">Resources</Link></div>
        <div className="nav-link"><Link to="/book">Book</Link></div>
        <div className="nav-link"><Link to="/map">Map</Link></div>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/resources" component={Resources} />
      <Route exact path="/map" component={Map} />
      <Route path="/book" component={Book} />
    </div>
  </Router>
);
export default RouterComponent;
