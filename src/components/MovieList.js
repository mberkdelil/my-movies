import React from 'react'
import Movie from './Movie'
import { connect } from "react-redux"
import SearchBar from './SearchBar'

const MovieList = (props) => {

  
  return (
    <>
      <SearchBar />
      <div className="row">
        {
          props.movies.map((movie) => {
            return (
              <Movie key={movie.id} movie={movie} />
            )
          })
        }
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieList)