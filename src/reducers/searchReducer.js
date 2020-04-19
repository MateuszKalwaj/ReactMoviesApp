import {SEARCH_MOVIE} from '../actions/types';

//need to create here initial state

const initialStates = {
    text = '',
    movies : [],
    loading: false,
    movie: []
}

export default function(state = initialStates, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
            default:
        return state
    }
}