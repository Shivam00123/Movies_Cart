

export const ADD_MOVIES='ADD_MOVIES';

export function getMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}

export const ADD_FAVOURITE='ADD_FAVOURITE'

export function addFavourites(movie){
    return{
        type:ADD_FAVOURITE,
        movie
    }
}

export const REMOVE_FAVOURITE='REMOVE_FAVOURITE'

export function removeFavourite(movie){
    return{
        type:REMOVE_FAVOURITE,
        movie
    }
}

export const SHOW_FAVOURITES='SHOW_FAVOURITES'

export function showFavourites(bool){
    return{
        type:SHOW_FAVOURITES,
        bool
    }
}

export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST'

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleSearchResult(movie){
    const url = `https://www.omdbapi.com/?apikey=33989eec&t=${movie}`
    return function (dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log(movie)
            dispatch(addSearchResult(movie))
    })
    }
}

export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'

export function addSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    }
}