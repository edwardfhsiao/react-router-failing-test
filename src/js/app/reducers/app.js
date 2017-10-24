import { SET_MOVIE_LIST } from '../actions.js';

const initialState = {
	movieList: null
};

export default function app(state = initialState, action) {
	if (action.type == SET_MOVIE_LIST) {
		return { movieList: action.movieList };
	}
	return state;
}
