import React from 'react';
import './Pages.scss'
import { withRouter } from 'react-router-dom';
import moment from "moment";


function NewsPage(props) {
  console.log(props);
  const {state: news} = props.location;


  const {urlToImage = 'Image no avaible', title, publishedAt, content, source} = news;

  return (
    <div className="container">
      <div className="news">
        <button className='back' onClick={() => props.history.goBack()}/>
        <div className="news__main">
          <div className="news__image">
            <img src={urlToImage} alt=""/>
          </div>
          <div className="news__title">
            <h3>{title}</h3>
            <div className="row">
              <span className="news__author-name">{source.name}</span>
              <span className="news__published-date">{moment(publishedAt).format('MMM DD.YYYY')}</span>
            </div>
          </div>
        </div>
        <p className="news__full-text">
          {content}
        </p>
      </div>
    </div>
  )
}

export default withRouter(NewsPage)