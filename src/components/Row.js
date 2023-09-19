import { Link } from 'react-router-dom';

import './Row.css'

const Row = ({ title, movies }) => {
    return (
        <div className="row">
            <h2 className='h2-grotesk'>{title}</h2>
            <div className="row-images">
                {movies ? (
                    movies.map((movie) => (
                        <Link to={`/movies/${movie._id}`} className='row-images-link' key={movie._id}>
                            <img src={movie.row} alt={movie.title} className='row-image' />
                        </Link>
                    ))
                ) : (
                    <div className="loading-message">
                        <p className='p-base'>Loading...</p>
                    </div>
                )}
            </div>
        </div>);
}

export default Row;