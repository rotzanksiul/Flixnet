import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import './Banner.css'

const Banner = ({ movies }) => {

    const [movie, setMovie] = useState([]);

    // use effect to get a random movie 

    useEffect(()=>{
        setMovie(
            movies[Math.floor(Math.random() * 12)]
        )

        console.log(movie)
    },[])

    return (

        
        <div className="banner bg-wrapper">

            <div className="banner-content bg-wrapper-content">
                <div className="banner-content-info">
                <h1 className="banner-title movie-title ">
                    {movie.title}
                </h1>
                <p className="banner-content-sinopsis movie-base">
                {movie?.sinopsis}
                </p>
                <Link to={`/movies/${movie.id}`} className="custom-button" reloadDocument>Details</Link>
                </div>
            </div>

            <div className="banner-background bg-wrapper-image" style={{ backgroundImage: `url(${movie.cover })` }} ></div>
        </div>

    );
}

export default Banner;