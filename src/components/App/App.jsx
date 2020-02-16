import React, { Component } from 'react';
import './style.scss';
import Header from '../Header/';
import TopNews from "../TopNews";
import LatestNews from "../LatestNews";

export default class App extends Component {
  render() {

    return (
      <div className='app'>
        <Header />
        <main className='main'>
          <div className="container">

            <TopNews />
            <LatestNews />
          </div>
        </main>
      </div>
    )
  }
}
