import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './pages/admin';
import Login from './pages/login';

import './App.css';


export default class App extends Component{
  render() {
    return <Router>
      {/*
        Switch 切换，只显示匹配上的第一个路由组件，后面的就不看了
      */}
      <Switch>
        {/*只要以"/"开头的，都会匹配和加载 */}
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
      </Switch>
    </Router>;
  }
}

