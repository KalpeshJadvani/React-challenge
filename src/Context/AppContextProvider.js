import React, { useState, createContext, useEffect } from 'react';
import { getMovieList } from '../utility/api-service';
const Context = createContext();

const AppContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieList()
      .then((results) => {
        setMovies(results);
      })
      .catch((err) => {});
  }, []);

  return (
    <Context.Provider value={{ movies }}>{props.children}</Context.Provider>
  );
};
const Consumer = Context.Consumer;
export { AppContextProvider, Consumer, Context };
