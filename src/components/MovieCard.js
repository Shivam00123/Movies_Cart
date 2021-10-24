import React from 'react';
import {addFavourites,removeFavourite} from '../actions'
// import {connect} from '../index'

class MovieCard extends React.Component{

    handleFavouriteItems=()=>{

        const {movie}=this.props;
        this.props.dispatch(addFavourites(movie))
    }
    handleUnfavouriteItems=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFavourite(movie))
    }

    render(){
        const {movie,isFavourite}=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                        isFavourite
                        ?<button className="unfavourite-btn" onClick={this.handleUnfavouriteItems}>Unfavourite</button>
                        :<button className="favourite-btn" onClick={this.handleFavouriteItems}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )}
}



export default MovieCard