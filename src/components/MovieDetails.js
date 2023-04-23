import { useParams } from "react-router-dom";
import movies from '../data/dataAll'
import SubRow from "./SubRow";

import './MovieDetails.css'

const MovieDetails = () => {
    const { id } = useParams();

    // Get the Object info using id
    const movie = movies.find(movie => movie.id === parseInt(id))

    // Get movies recommendations  using the filter properties and pass it as props
    const recommendedMovies = movies.filter(recommended => recommended !== movie && recommended.filter === movie.filter);

    return (
        <div className="details">
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
                        <p className="movie-base-genre"><strong>Genre: </strong>{movie.genrer}</p>
                    </div>
                </div>

                <div className="banner-background bg-wrapper-image" style={{ backgroundImage: `url(${movie.cover})` }} >

                </div>
            </div>
            <SubRow data={recommendedMovies} title='You might also like' ></SubRow>
        </div>

    );
}

export default MovieDetails;