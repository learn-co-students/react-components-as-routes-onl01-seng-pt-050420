import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import About from './About'
import Home from './Home'
import Login from './Login'
import NavBar from './NavBar'
import Signup from './Signup'
import Messages from './Messages'

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route  path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);