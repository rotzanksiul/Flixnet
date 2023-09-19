import SubRow from "./SubRow";

import Axios from 'axios'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import './MovieDetails.css'


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const [allMovies, setAllMovies] = useState([]);

    // Get the movie based in the id
    const getMovie = () => {
        Axios.get(`https://flixnet-app-backend.up.railway.app/movies/${id}`)
            .then((response) => {
                setMovie(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }

    //Get all movies
    const getMovies = () => {
        Axios.get('https://flixnet-app-backend.up.railway.app/movies')
            .then((response) => {
                setAllMovies(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getMovie();
        getMovies();
    }, [id])

    //Filter the movies to give the recommendations based in genre
    const recommendedMovies = allMovies.filter((m) => m._id !== movie._id && m.genre.includes(movie.genre[0]))

    return (
        <div className="details">
            {loading ? (
                <div className="loading-message">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className=" bg-wrapper moviedetails">
                    <div className="moviedetails-content bg-wrapper-content">
                        <div className="moviedetails-content-info ">
                            <h2 className="movie-title">{movie.title}</h2>
                            <div className="movie-tags">
                                <span className="movie-base-tag">{movie.rating}</span>
                                <span className="movie-base-tag">{movie.type}</span>
                                <span className="movie-base-tag">{movie.duration}</span>
                            </div>
                            <p className="movie-base">{movie.sinopsis}</p>
                            <hr className="line" />
                            <p className="movie-base-genre"><strong>Genre:</strong> {movie.genre.join(', ')}</p>
                        </div>
                    </div>

                    <div className="banner-background bg-wrapper-image" style={{ backgroundImage: `url(${movie.cover})` }} >

                    </div>
                </div>
            )}
            <SubRow data={recommendedMovies} title='You might also like' ></SubRow>
        </div>
    );
}

export default MovieDetails;