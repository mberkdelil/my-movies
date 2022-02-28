import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteMovie } from '../actions';

const Movie = (props) => {

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  return (
    <>
      <div className="col-lg-4" key={props.movie.id} >
        <div className="card mb-4 shadow-sm">
          <img src={props.movie.imageURL} className="card-img-top" alt="Sample Movie" />
          <div className="card-body">
            <h5 className="card-title">{props.movie.name}</h5>
            <p className="card-text">{truncateOverview(props.movie.overview, 100)}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button onClick={() => props.deleteMovie(props.movie.id)} type="button" className="btn btn-md btn-outline-danger">Delete</button>

              <Link type="button"
                className="btn btn-md btn-outline-primary"
                to={`/editmovie/${props.movie.id}`}
              >Edit </Link>

              <h2><span className="badge badge-info">{props.movie.rating}</span></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(null, { deleteMovie })(Movie)