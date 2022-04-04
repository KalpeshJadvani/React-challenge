import React, { useState, createContext, useEffect } from 'react';
import { getMovieList } from '../utility/api-service';
const Context = createContext();

const AppContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    getMovieList()
      .then((results) => {
        setMovies(results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Context.Provider value={{ movies, error, search, loading, handleSearchChange }}>{props.children}</Context.Provider>
  );
};
const Consumer = Context.Consumer;
export { AppContextProvider, Consumer, Context };
