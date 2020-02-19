import React, {Component} from 'react';
import './LatestNews.scss';
import NewsApi from "../../api/news-api";
import withData from "../HOC-helpers/with-data";
import moment from 'moment';
import NoPhoto from '../../no-image.gif';
import InfiniteScroll from "react-infinite-scroll-component";
import {ReactComponent as Spinner} from './spinner.svg';
import { Link } from "react-router-dom";

const newsApi = new NewsApi();
const { getLatestNews } = newsApi;

class LatestNews extends Component {

  render() {


    const { data, fetchMoreData } = this.props;
    console.log('DATA---', data)

    return (
      <div className='latest-news'>
        <h2>Latest News</h2>
        <ul className='latest-news__list'>

        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={(data.length + 20) <= 100}
          loader={<Spinner />}
          endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
          </p>
          }
        >
          {
            data.map((item, i) => {
              return (
                <li className='latest-news__list-item' key={i}>
                <Link to='/news'>
                  <div className="latest-news-card">
                    <div className="latest-news-card__image">
                      <img src={item.urlToImage ? item.urlToImage : NoPhoto } alt="" />
                    </div>
                    <div className="latest-news-card__content">
                      <p className="latest-news-card__title">{item.title}</p>
                      <div className="latest-news-card__bottom">
                        <span className="latest-news-card__date">{moment(item.publishedAt).format('DD.MM.YYYY')}</span>
                        <span className="latest-news-card__source">{item.source.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                </li>
              )
            })
          }
        </InfiniteScroll>
        </ul>
      </div>
    );
  }
}

export default withData(LatestNews, getLatestNews);