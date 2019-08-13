import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Admin from './pages/admin';
import Login from './pages/login';


class App extends Component{
  render() {
    return <Router>
      <Route path="/" component={Admin}/>
      <Route path="/login" component={Login}/>
    </Router>
  }
}

export default App;