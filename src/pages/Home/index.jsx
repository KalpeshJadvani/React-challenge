import React, { useContext } from 'react';
import Card from '../../components/Card';
import NoData from '../../components/NoData/Index';
import Spinner from '../../components/Spinner';
import { Context } from '../../context/AppContextProvider.js';
import { IMG_BASE_URL } from '../../utility/api-service.js';
import './index.css';
export const Home = () => {
  const { movies, search, loading, error } = useContext(Context);

  const filterMovies = () => {
    if (search) {
      const searchRegex = new RegExp(`${search}`, 'gi');
      return movies.filter((movie) =>
        searchRegex.test(movie.title + movie.overview)
      );
    }
    return movies;
  };

  const filterData = filterMovies();

  if (error) {
    return(<NoData msg={error}/>);
  }

  return (
    <>
     {loading ? (
        <Spinner />
      ) : (
        <>
        <br />
        <div className="home">
          {filterData.length > 0 ? filterData.map((movie) => {
            return (
              <Card
                key={movie.id}
                imageURL={`${IMG_BASE_URL}original/${movie.poster_path}`}
                name={movie.title}
                id={movie.id}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
              />
            );
          }):
          <NoData msg={"No Data!"}/>
          }
        </div>
        </>
        )
      }
    </>
  );
};

export default Home;
