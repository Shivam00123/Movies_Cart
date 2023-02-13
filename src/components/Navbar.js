import React from 'react';
import {connect} from 'react-redux';
import {addMovieToList,handleSearchResult} from '../actions'
// import {connect} from '../index'

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchText:''
        }
    }

    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie))
        this.setState({
            showSearchResult:false
        })
    }   
    handleSearch=()=>{
        const {searchText}=this.state;
        this.props.dispatch(handleSearchResult(searchText))
    }

    handleSearchInput=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }


    render(){
        // const { showSearchResult }=this.state;
        const {result,showSearchResult}=this.props.search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input placeholder="Search Movie" onChange={this.handleSearchInput}/>
                    <button id="search-btn" onClick={this.handleSearch}>search</button>

                        {showSearchResult && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic"/>

                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                        </div>
                        }
                </div>
            </div>
        )}
}

function mapToStateProps({search}){
    return{
        search,
    }
}

const connectedComponent=connect(mapToStateProps)(Navbar)


export default connectedComponent;
