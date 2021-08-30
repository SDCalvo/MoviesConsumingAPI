import { useState, useEffect } from "react";
import './Home.css'
import { Link } from "react-router-dom";

export default function Home(){

    const [carousel, setCarousel] = useState([]);
    const [explore, setExplore] = useState([]);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBKEY}&s=` + 'movie')
            .then(response => response.json())
            .then(res => {
                if(res.Search) setCarousel(res.Search);
                console.log(res);
            });
        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBKEY}&s=` + 'film')
            .then(response => response.json())
            .then(res => {
                if(res.Search) setExplore(res.Search);
                console.log(res);
            });    
    }, []);


    return(

        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center glass border text-white mt-3 p-2"><h1>Películas recomendadas</h1></div>
                    <div className="col-12 carousel-movies border glass p-5 m-5">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    carousel.map((movie, index) => {
                                        return (
                                            <div key={movie?.imdbID} className={`carousel-item text-center text-white ${index === 0 ? ' active' : ''}`}>
                                                <div className="p-4 rounded bg-dark">
                                                <Link to={`/movies/${movie.imdbID}`}><img className="d-block w-100 carousel-img" src={movie?.Poster} alt="First slide"/></Link>
                                                </div>
                                                <h2 className="my-4">{movie?.Title}</h2>
                                                <h6 className="text-center">Year: {movie?.Year}</h6>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row margin-bot bg-dark rounded border">
                    <div className="text-center text-white mt-3">
                        <h2>Explorar</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        {
                            explore.map((movie, index) => {
                                return (
                                    //return a card for every movie
                                <div key={movie.imdbID} className="card glass border search-card rounded m-3">
                                    <img className="card-img-top rounded my-2" src={movie.Poster} alt={movie.title}/>
                                    <div className="card-body d-flex flex-column justify-content-center text-white rounded py-0">
                                        <h4 className="card-title text-center">{movie.Title}</h4>
                                        <p className="card-text text-center">{movie.Year}</p>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link to={`/movies/${movie.imdbID}`} className="btn btn-success">See more</Link>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>    
                </div>
            </div>
        </>
    );
}