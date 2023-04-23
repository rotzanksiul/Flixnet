import { Link } from 'react-router-dom';

import './Row.css'


const Row = ({ title, movies }) => {
    return (
        <div className="row">
            <h2 className='h2-grotesk'>{title}</h2>
            <div className="row-images">
                
                    {movies.map((movie) => (
                        <Link to={`/movies/${movie.id}`} className='row-images-link' key={movie.id} reloadDocument>
                        <img src={movie.row} alt={movie.title}  className='row-image' />
                        </Link>
                    ))}
                

            </div>
        </div>);
}

export default Row;