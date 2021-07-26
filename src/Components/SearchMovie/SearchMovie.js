import { useState } from "react";
import { Link } from "react-router-dom";
import './SearchMovie.css'

export default function SearchMovie(){


    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies ] = useState([]);

    function handleSearch(e){
        e.preventDefault();
        
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBKEY}&s=` + searchValue)
            .then(response => response.json())
            .then(res => {
                if(res.Search) setMovies(res.Search);
                console.log(res);
            });
    }

    function handleChange(e){
        setSearchValue(e.target.value);
    }

    return(

    <>
        <div className="container margin-bot">
            <div className="row glass border p-3 my-5 rounded">
                <div className="col-md-12">
                    <form className="form-inline d-flex justify-content-between my-2 my-lg-0">
                        <input className="searchbox-bg text-white form-control w-75 mr-sm-2" value={searchValue} onChange={(e)=> handleChange(e)} type="search" placeholder="Search for a movie" aria-label="Search"/>
                        <button className="btn btn-success my-2 my-sm-0" type="submit" onClick={(e) => handleSearch(e)}>Search</button>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                {
                    movies.length > 0 ?
                        movies.map((movie, index) => {
                            let moviePoster
                            if(movie.Poster === 'N/A'){
                                moviePoster = 'http://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg';
                            }
                            else{	
                                moviePoster = movie.Poster;
                            }
                            return(
                                <div key={movie.imdbID} className="card glass border search-card rounded m-3">
                                    <img className="card-img-top rounded my-2" src={moviePoster} alt={movie.title}/>
                                    <div className="card-body d-flex flex-column justify-content-center text-white rounded p-2 mt-1 mb-2">
                                        <div>
                                            <h6 className="card-title text-center">{movie.Title}</h6>
                                        </div>
                                        <div>
                                            <p className="card-text text-center">{movie.Year}</p>  
                                        </div>  
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link to={`/movies/${movie.imdbID}`} className="btn btn-success">See more</Link>
                                    </div>
                                </div>
                            )    
                        }) :
                        <div className="rounded m-3 p-5 glass border searchbox-color">
                            <div className="text-center">
                                <h5 className="text-center">Movies found will be displayed here</h5>
                            </div>
                        </div>

                }	
            </div>
        </div>
    </>
    )
}