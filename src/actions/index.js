export const addMovie = movie => {
    return { type: "ADD", payload: movie }
};

export const deleteMovie = id => {
    return { type: "DELETE", payload: id }
};

export const searchMovie = search => {
    return { type: "SEARCH", payload: search }
}