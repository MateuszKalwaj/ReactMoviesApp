import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props
        return (
         
                 <div className="col-md-3 mb-5">
        <div className="card card-body background-color text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-color card-title">
            {movie.Title} - {movie.Year}
          </h5>
          {/* <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link> */}
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    
        )
    }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard
