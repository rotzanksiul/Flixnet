import { Link } from 'react-router-dom';
import './Row.css'

//Component to provide the recomended movies
const SubRow = ({ data, title }) => {
    return (
        <div className="row">
            <h2 className='h2-grotesk'>{title}</h2>
            <div className="row-images">
                {data.map((movie) => (
                    <Link to={`/movies/${movie._id}`} className='row-images-link' key={movie._id}>
                        <img src={movie.row} alt={movie.title} className='row-image' />
                    </Link>
                ))}
            </div>
        </div>);
}

export default SubRow;