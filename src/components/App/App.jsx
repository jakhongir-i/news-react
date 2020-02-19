import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.scss';
import Header from '../Header/';
import { HomePage, NewsPage } from '../Pages'


export default class App extends Component {
  render() {

    return (
      <div className='app'>
        <Router >
          <Route path='/' component={HomePage} exact/>
          <Route path='/news' component={NewsPage}/>
        </Router>
      </div>
    )
  }
}
