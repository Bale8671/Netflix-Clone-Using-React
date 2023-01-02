import React, { useEffect, useState } from "react";
import "./Row.css";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
    console.log(request.data.results);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchurl]);
  console.log(movies);
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }

  }
const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.original_name || movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
        <img
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
        ))}
      </div>
   <div className="row_youtube"> 
   {trailerUrl && <Youtube opts={opts} videoId={trailerUrl}/>}
   </div>
    </div>
  );
}


export default Row;