import React from 'react'
import './HomeScreen.css';
import NavBar from './NavBar';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <NavBar />
      <Banner />
      <Row
        title='Trending'
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title='Action'
        fetchUrl={requests.fetchAction}
      />
      <Row
        title='Romance'
        fetchUrl={requests.fetchRomance}
      />
      <Row
        title='Horor'
        fetchUrl={requests.fetchHoror}
      />
      <Row
        title='Comedy'
        fetchUrl={requests.fetchComedy}
      />
    </div>
  )
}

export default HomeScreen