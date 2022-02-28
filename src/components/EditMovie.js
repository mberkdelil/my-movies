import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMovie, deleteMovie } from '../actions';

const EditMovie = (props) => {

    var id = window.location.pathname.split('/')[2];
    const navigator = useNavigate();
    const movie = props.movies.find(movie => movie.id == id ? movie : null);
    const [movies, setMovies] = useState({ id: movie.id, name: movie.name, rating: movie.rating, imageURL: movie.imageURL, overview: movie.overview });

    console.log(movies);

    return (
        <div className="container">
            <form className="mt-5" >
                <input className="form-control" id="disabledInput" type="text" placeholder="EDIT The Form To UPDATE A Movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={movies.name}
                            onChange={e => setMovies({ ...movies, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            value={movies.rating}
                            onChange={e => setMovies({ ...movies, rating: e.target.value })}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={movies.imageURL}
                            onChange={e => setMovies({ ...movies, imageURL: e.target.value })}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview"
                            rows="5"
                            value={movies.overview}
                            onChange={e => setMovies({ ...movies, overview: e.target.value })}
                        ></textarea>
                    </div>
                </div>
                <input onClick={e => {
                    e.preventDefault();
                    props.deleteMovie(movies.id);
                    props.addMovie(movies)
                    navigator("/");
                }} type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps, { addMovie, deleteMovie })(EditMovie);