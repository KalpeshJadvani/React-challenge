import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, IMG_BASE_URL } from '../../utility/api-service.js';
import Image from '../../components/Image';
import NoData from '../../components/NoData/Index.jsx';
import './index.css';
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    getMovieById(id)
      .then(setMovie)
      .catch((err) => {
        setError('Network Error');
      });
  }, []);

  if (error) {
    return <NoData msg={error} />;
  }

  return (
    <div className="container">
      <div className="imageBox">
        <Image imageURL={`${IMG_BASE_URL}original/${movie?.poster_path}`} />
      </div>
      <div>
        <h2> {movie?.title} </h2>
        <h3> {movie?.tagline} </h3>
        <h3> {movie?.release_date} </h3>
        <p>{movie?.overview}</p>
        <h4> Popularity {movie?.popularity} </h4>
        <h4> Vote Average :- {movie?.vote_average} </h4>
        <h4> Vote Count :- {movie?.vote_count} </h4>
      </div>
    </div>
  );
};

export default MovieDetails;
