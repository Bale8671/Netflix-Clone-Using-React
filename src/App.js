import requests from './request'
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner/>
     <Row title="NETFLIX ORIGINALS"
     fetchurl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchurl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchurl={requests.fetchTopRatedMovies}/>
     <Row title="Action Movie" fetchurl={requests.fetchActionMovies}/>
     <Row title="Comedy Movie" fetchurl={requests.fetchComedyMovies}/>
     <Row title="Horror Movie" fetchurl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movie" fetchurl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries Movie" fetchurl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;