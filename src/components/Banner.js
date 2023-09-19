import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import './Banner.css'

const Banner = ({ movies }) => {

    const [bannerMovie, setBannerMovie] = useState([]);

    //Use effect to get a random movie 
    useEffect(() => {
        // Check if there are movies in the list
        if (movies && movies.length > 0) {
            //Random index between 0 and the length of the movies
            const randomIndex = Math.floor(Math.random() * movies.length);

            // Random index to get a random movie
            const randomMovie = movies[randomIndex]
            setBannerMovie(randomMovie)
        }
    }, [movies])

    return (
        <div className="banner bg-wrapper">
            <div className="banner-content bg-wrapper-content">
                {bannerMovie && (
                    <div className="banner-content-info">
                        <h1 className="banner-title movie-title ">
                            {bannerMovie.title}
                        </h1>
                        <p className="banner-content-sinopsis movie-base">
                            {bannerMovie.sinopsis}
                        </p>
                        <Link to={`/movies/${bannerMovie._id}`} className="custom-button">Details</Link>
                    </div>
                )}
            </div>
            {bannerMovie && (
                <div className="banner-background bg-wrapper-image" style={{ backgroundImage: `url(${bannerMovie.cover})` }} ></div>
            )}
        </div>
    );
}

export default Banner;