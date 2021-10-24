import React from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import {data} from '../data'
import MovieCard from './MovieCard'
import {getMovies,showFavourites} from '../actions'
// import {connect} from '../index'

class App extends React.Component {
  componentDidMount(){
    // const {store}=this.props
    this.props.dispatch(getMovies(data))
  }

  isMovieFavourite=(movie)=>{
      const {movies}=this.props
      const index=movies.favourite.indexOf(movie)
      if(index !== -1){
        return true
      }else{
        return false
      }
  }
  showFavouritesMovies=(val)=>{
    this.props.dispatch(showFavourites(val))
  }
  
  render(){
    console.log('render')
    const {movies,search}=this.props
    const {list,favourite,showFavourites}=movies
    const dispalyFav=showFavourites ? favourite : list
    return (
      <div className="App">
              <Navbar 
                search={search}
                dispatch={this.props.dispatch}
              />
              <div className="main">
                <div className="tabs">
                  <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick={()=>this.showFavouritesMovies(false)}>Movies</div>
                  <div className={`tab ${showFavourites ?'active-tabs':''}`} onClick={()=>this.showFavouritesMovies(true)}>Favourites</div>
                </div>
              </div>

              <div className="list">
                {dispalyFav.map((movie,index)=>(
                <MovieCard 
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
                />))}
              </div>
              <div>
                {dispalyFav.length===0?<div className="no-movies">No Movies to show yet</div>:null}
              </div>
        </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=><App store={store}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapToStateProps(state){
  return{
    movies:state.movies,
    search:state.search
  }
}

const connectedComponent=connect(mapToStateProps)(App)

export default connectedComponent;
