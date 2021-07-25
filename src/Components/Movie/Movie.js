import {useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Movie.css'



export default function Movie(){

    let {id} = useParams();
    

    const [movie, setMovie] = useState({});

    useEffect(() => {
        console.log(id)
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBKEY}&plot=full&i=` + id)
        .then(res => res.json())
        .then(response => {
            setMovie(response);
            console.log(response)
        })
    }, []);

    return(
        <div className="container mt-5 mar-bottom">
            <div className="row my-5 justify-content-between glass p-5 rounded">
                <div className="col-4 p-2 rounded d-flex justify-content-center">
                    <img src={movie.Poster} alt={movie.Title}/>
                </div>
                <div className="col-8 bg-dark rounded text-white p-3">
                    <h1 className="text-center">{movie.Title}</h1>
                    <h3 className="text-center">{movie.Year}</h3>
                    <p className="text-justify py-3">{movie.Plot}</p>
                    <div className="d-flex justify-content-between">
                        <div >
                            <span>Duration: {movie.Runtime}</span>
                            <br/>
                            <span>Genre: {movie.Genre}</span>
                            <br/>
                            <span>Director: {movie.Director}</span>
                            <br/>
                            <span>Cast: {movie.Actors}</span>
                            <br/>
                            <span>Released: {movie.Released}</span>
                            <br/>
                            <span>Writer: {movie.Writer}</span>
                            <br/>
                            <span>Country: {movie.Country}</span>
                            <br/>
                            <span>Language: {movie.Language}</span>
                            <br/>
                            <span>Production: {movie.Production}</span>
                            <br/>
                            <span>Rating: {movie.Rated}</span>
                        </div>
                        <div>
                            <h3 className="my-2 py-2">IMDB rating: {movie.imdbRating}</h3>
                            <h6 className="my-2 py-2">Rating from {movie.imdbVotes} votes</h6>
                            <h3 className="my-2 py-2">Metascore: {movie.Metascore}</h3>
                            
                        </div>
                    </div>
                    <div className="text-center mt-3 py-2">
                        <p>Awards: {movie.Awards}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a target='_blank' className="btn btn-outline-success" href={`https://www.imdb.com/title/${id}`} rel="noreferrer">Find on IMDB</a>
                    </div>
                </div>
            </div>    
        </div>
    )
    }