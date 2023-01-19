import React from 'react';
import Main from '../components/Main/Main';
import Row from '../components/Row/Row';
import requests from '../requests';

const Home = () => {
  return (
    <>
      <Main />
      <Row title='Up Coming' fetchURL={requests.requestUpcoming} rowID='1'/>
      <Row title='Popular' fetchURL={requests.requestPopular} rowID='2'/>
      <Row title='Trending' fetchURL={requests.requestTrending} rowID='3'/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated} rowID='4'/>
      <Row title='Horror' fetchURL={requests.requestHorror} rowID='5'/>
    </>
  );
};

export default Home;
