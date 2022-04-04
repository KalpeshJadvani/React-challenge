import axios from 'axios';

export const KEY = 'ecc3d89d9fd6c491a8bc5845b3884896';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMG_BASE_URL = 'http://image.tmdb.org/t/p/';

export const getMovieList = async () => {
  try {
    const res = await axios.get(`${BASE_URL}movie/upcoming?api_key=${KEY}`);
    return res.data.results;
  } catch {
    throw Error('Network error');
  }
};
export const getMovieById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);
    return res.data;
  } catch {
    throw Error('Network error');
  }
};
