import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';



function App() {
  return (
    <div className="App">
      {/* <h1>Hey this is clever programmer netflix clone front end today</h1>  */}
      {/* CREATE THE NAVBAR */}
      {/* CREATE THE BANNER */}
      <Nav/>
      <Banner></Banner>
      <Row title='NETFLIX ORIGINALS' 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow ></Row>

      <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>

      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}></Row>

      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}></Row>

      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}></Row>

      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}></Row>

      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}></Row>

      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>
      

      
    </div>
  );
}

export default App;
