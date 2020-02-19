import React from 'react';
import TopNews from '../TopNews';
import LatestNews from '../LatestNews'
import Header from '../Header'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className="container">
          <TopNews />
          <LatestNews />
        </div>
      </main>
    </>
   
  )
}
