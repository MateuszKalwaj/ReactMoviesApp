import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchMovie, setLoading} from '../../actions/searchActions'
import { Link } from 'react-router-dom'
import PacmanLoading from '../layout/PacmanLoading'

export class Movie extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }

    render() {
        const { loading, movie } = this.props;
        
        let movieInfo = ( 
          <div className="container mt-2">
       <div className="row">
         <div className="col-md-4 card card-body border border-info">
           <img src={movie.Poster} className="thumbnail" alt="Poster" />
         </div>
         <div className="col-md-8">
           <h2 className="mb-4">{movie.Title}</h2>
           <ul className="list-group">
             <li className="list-group-item">
               <b>IMDB Rating:</b> {movie.imdbRating}
             </li>
             <li className="list-group-item">
               <b>Runtime:</b> {movie.Runtime}
             </li>
             <li className="list-group-item">
               <b>Released:</b> {movie.Released}
             </li>
             <li className="list-group-item">
               <b>Rated:</b> {movie.Rated}
             </li>
             <li className="list-group-item">
               <b>Director:</b> {movie.Director}
             </li>
             <li className="list-group-item">
               <b>Writer:</b> {movie.Writer}
             </li>
             <li className="list-group-item">
               <b>Actors:</b> {movie.Actors}
             </li>
           </ul>
         </div>
       </div>
       <div className="row">
         <div className="card card-body bg-dark my-5 text-light">
           <div className="col-md-12">
             <h3>About </h3>
            {movie.Plot}

            <br></br>
            {movie.BoxOffice}
             <hr />
             <a
               href={'https://www.imdb.com/title/' + movie.imdbID}
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-primary"
             >
               View on IMDB
             </a>
             <Link to="/" className="btn btn-default text-light">
               Go Back To Search
             </Link>
           </div>
         </div>
       </div>
     </div>
        )

         let content = loading ? <PacmanLoading /> : movieInfo
        return (
            <div>{content}</div>
        )

        }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps,{fetchMovie,setLoading})(Movie)
