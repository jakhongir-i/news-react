import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './TopNews.scss';
import withData from "../HOC-helpers/with-data";
import NewsApi from "../../api/news-api";
import NoPhoto from '../../no-image.gif'
import { Link } from "react-router-dom";


const newsApi = new NewsApi();

const { getTopNews } = newsApi;


class TopNews extends Component {


  render() {

    const params = {
      spaceBetween: 16,
      slidesPerView: 'auto',
      rebuildOnUpdate: true,
      lazy: true
    };

    const { data } = this.props;

    return (
      <div className='top-news'>
        <h2>Top News</h2>

        <div className='top-news__slider'>

          <Swiper {...params}>
            { data.map((news, i) => {
              return (
                <Link
                  to={{
                    pathname: `/news/${i}`,
                    state: news
                }}>
                  <div key={i}>
                    <div className="top-news-card">
                      <img src={news.urlToImage ? news.urlToImage : NoPhoto} alt="" className='top-news-card__image'/>
                      <p className='top-news-card__title'>{news.title}</p>
                    </div>
                  </div>

                </Link>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    );
  }
}

export default withData(TopNews, getTopNews);