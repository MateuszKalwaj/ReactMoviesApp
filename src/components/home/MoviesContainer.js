import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

// import {connect} from 'react-redux'


export class MoviesContainer extends Component {
    render() {
        const {movies} = this.props

        let content = ''

        content =
        movies.Response === 'True'
          ? movies.Search.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))
          : <div><p>Is that really what you are looking for?</p></div>;

        return (
            <div className="row">
                {content}
            </div>
        )
    }


}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps) (MoviesContainer)
