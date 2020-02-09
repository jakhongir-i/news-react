import React, { Component } from 'react';
import './style.scss';
import Header from '../Header/';
import TopNews from "../TopNews";
import LatestNews from "../LatestNews";
import NewsApi from "../../api/news-api";
import { NewsApiProvider } from "../Context";

export default class App extends Component {
  Api = new NewsApi();

  
  render() {
    return (
      <div className='app'>
        <NewsApiProvider api={this.Api}>
          <Header />
          <main className='main'>
            <div className="container">
              <TopNews />
              <LatestNews />
            </div>
          </main>
        </NewsApiProvider>
      </div>
    )
  }
}
