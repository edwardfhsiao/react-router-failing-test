import axios from 'axios';

export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const setMovieList = movieList => ({
  type: SET_MOVIE_LIST,
  movieList
});

export const fetchMovieList = url => (dispatch, getState) => {
  axios
    .get(url)
    .then(res => {
      dispatch(setMovieList([...res.data.movies, ...res.data.movies, ...res.data.movies, ...res.data.movies, ...res.data.movies, ...res.data.movies, ...res.data.movies, ...res.data.movies]));
    })
    .catch(err => {
      console.log(err);
    });
};
