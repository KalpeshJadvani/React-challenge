import React, { useContext } from 'react';
import Card from '../../components/Card';
import { Context } from '../../context/AppContextProvider.js';
import { IMG_BASE_URL } from '../../utility/api-service.js';
import './index.css';
export const Home = () => {
  const { movies } = useContext(Context);

  return (
    <>
      <br />
      <div className="home">
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              imageURL={`${IMG_BASE_URL}original/${movie.poster_path}`}
              name={movie.title}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
