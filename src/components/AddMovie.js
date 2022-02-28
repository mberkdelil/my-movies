import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMovie } from "../actions/index"

const AddMovie = (props) => {

    const [movie, setMovie] = useState({ name: "", rating: "", imageURL: "", overview: "" });

    const navigation = useNavigate();

    return (
        <div className="container">
            <form className="mt-5" >
                <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={movie.name}
                            onChange={e => setMovie({ ...movie, name: e.target.value })} placeholder="Enter Movie Name" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            value={movie.rating}
                            onChange={e => setMovie({ ...movie, rating: e.target.value })} placeholder="Enter Movie Rating" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={movie.imageURL}
                            onChange={e => setMovie({ ...movie, imageURL: e.target.value })} placeholder="Enter Movie Image URL" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"
                            value={movie.overview}
                            onChange={e => setMovie({ ...movie, overview: e.target.value })} placeholder="Enter Movie Overview" ></textarea>
                    </div>
                </div>
                <input onClick={(e) => {
                    e.preventDefault();
                    props.addMovie(movie);
                    navigation("/");
                }} type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
    )
}



export default connect(null, { addMovie })(AddMovie)