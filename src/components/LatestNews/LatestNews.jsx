import React, {Component} from 'react';
import './LatestNews.scss'

class LatestNews extends Component {
  render() {

    const news = [];
    for (let i = 0; i < 6; i++) {
      news.push(
        <li className='latest-news__list-item' key={i}>
          <div className="latest-news-card">
            <div className="latest-news-card__image">
              <img src="https://i.picsum.photos/id/500/500/500.jpg" alt=""/>
            </div>
            <div className="latest-news-card__content">
              <p className="latest-news-card__title">
                New Microsoft Browser Combats Crypto Mining Malware
              </p>
              <div className="latest-news-card__bottom">
                <span className="latest-news-card__date">02.02.2020</span>
                <span className="latest-news-card__source">Bitcoinist.com</span>
              </div>
            </div>
          </div>
        </li>
      )
    }

    return (
      <div className='latest-news'>
        <h2>Latest News</h2>
        <ul className='latest-news__list'>
          {news}
        </ul>
      </div>
    );
  }
}

export default LatestNews;