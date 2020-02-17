import React from 'react'
import NoPhoto from '../../no-image.gif'
import moment from 'moment'
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';


const TopNewsCard = ({ news, key }) => {
  return (
    <div key={key}>
      <div className="top-news-card">
        <img src={news.urlToImage ? news.urlToImage : NoPhoto} alt="" className='top-news-card__image'/>
        <p className='top-news-card__title'>{news.title}</p>
      </div>
    </div>
  )
}


const LatestNewsCard = ({news}) => {
  return (
    <div className="latest-news-card">
      <div className="latest-news-card__image">
        <img src={news.urlToImage ? news.urlToImage : NoPhoto } alt="" />
      </div>
      <div className="latest-news-card__content">
        <p className="latest-news-card__title">{news.title}</p>
        <div className="latest-news-card__bottom">
          <span className="latest-news-card__date">{moment(news.publishedAt).format('DD.MM.YYYY')}</span>
          <span className="latest-news-card__source">{news.source.name}</span>
        </div>
      </div>
    </div>
  )
}


export {
  TopNewsCard,
  LatestNewsCard
}