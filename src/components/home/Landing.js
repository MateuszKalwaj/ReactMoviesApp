import React, { Component } from 'react'
import {connect} from 'react-redux'

import SearchForm from './SearchForm'
import PacmanLoading from '../layout/PacmanLoading'
import MoviesContainer from './MoviesContainer'

export class Landing extends Component {
    render() {
        const {loading} = this.props
        return (
            <div className ="container">
                <SearchForm />
                {loading ? <PacmanLoading /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps) (Landing)
