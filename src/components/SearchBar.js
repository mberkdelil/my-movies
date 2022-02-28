import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchMovie } from '../actions';

const SearchBar = (props) => {

    const [search, setSearch] = useState("");


    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.searchMovie(search);
        }} >
            <div className="form-row mb-5">
                <div className="col-10">
                    <input
                        onChange={e => {
                            e.preventDefault();
                            setSearch(e.target.value);
                            // props.searchMovie(search);
                        }}
                        value={search}
                        type="text" className="form-control"
                        placeholder="Seach a movie and press Enter"
                    />
                </div>
                <div className="col-2">
                    <Link
                        to="/addmovie"
                        type="button"
                        className="btn btn-md btn-danger"
                        style={{ float: 'right' }}>Add Movie
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default connect(null, { searchMovie })(SearchBar);