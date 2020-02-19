import React from 'react';
import './Pages.scss'

export default function NewsPage() {
  return (
    <div className="container">
      <div className="news">
        <span className='back'/>
        <div className="news__main">
          <div className="news__image">
            <img src="https://i.picsum.photos/id/75/500/300.jpg" alt=""/>
          </div>
          <div className="news__title">
            <h3>New Microsoft Browser Combats Crypto Mining Malware</h3>
            <div className="row">
              <span className="news__author-name">Anonymus</span>
              <span className="news__published-date">FEB 01, 2020</span>
            </div>
          </div>
        </div>
        <p className="news__full-text">
          Microsoft recently released the first full version of its chromium-based browser Microsoft Edge with several design improvements. For example, it brings new security features to protect users from automatically downloading unwanted apps, such as adware and other malicious programs that harm a user’s PC.
        </p>
      </div>
    </div>
  )
}
