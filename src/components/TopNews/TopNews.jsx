import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './TopNews.scss';
import {NewsApiConsumer} from "../Context";

class TopNews extends Component {
  render() {


    const slides = [];
    for (let i = 0; i <= 5; i++) {
      slides.push(
        <div key={i}>
          <div className="top-news-card">
            <img src="https://i.picsum.photos/id/2/500/300.jpg" alt="" className='top-news-card__image'/>
            <p className='top-news-card__title'>BBOO Virus (.bboo File) – Removal and Recovery Guide</p>
          </div>
        </div>
      )
    }

    const params = {
      spaceBetween: 16,
      slidesPerView: 'auto'
    };

    return (

      <div className='top-news'>
        <h2>Top News</h2>
        <div className='top-news__slider'>

          <Swiper {...params}>
            {slides}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default TopNews;