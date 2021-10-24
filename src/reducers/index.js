import {combineReducers} from 'redux';
import {
    ADD_MOVIES,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
    SHOW_FAVOURITES,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT} from '../actions'


const initialMovieState={
    list:[],
    favourite:[],
    showFavourites:false
}

export function movies(state=initialMovieState,action){
    switch (action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourite:[action.movie,...state.favourite]
            }
        case REMOVE_FAVOURITE:
            const filteredArray=state.favourite.filter(
                movie=>movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourite:filteredArray
            }
        case SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.bool
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state
    }
}

export const initialSearch ={
    result:{},
    showSearchResult:false,
}

export function search(state=initialSearch,action){
    switch (action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResult:true,
            }
            case ADD_MOVIE_TO_LIST:
                return{
                    ...state,
                    showSearchResult:false,
                }
        default:
            return state;
    }
}

// const initialRootState={
//     movies:initialMovieState,
//     search:initialSearch
// }

// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
    movies,
    search
})