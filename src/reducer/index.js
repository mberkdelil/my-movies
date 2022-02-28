import { movies } from "../movie";

const initialState = {
    movies: movies
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, movies: [...state.movies, action.payload]
            }

        case "DELETE":
            return {
                ...state, movies: state.movies.filter(movie => movie.id !== action.payload)
            };

        case "SEARCH":

            if (action.payload === "") {
                return state;
            } else {
                return {
                    ...state, movies: state.movies.filter(movie => {
                        return movie.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                    }).sort((a, b) => {
                        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
                    })
                }
            }


        default:
            return state;
    }
}