import { Link } from "react-router-dom";
import brand from '../movieimg/brand.png'

import './Footer.css'

const Footer = () => {

    const handleClick = () =>{
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer">
            <div className="footer-brand-info">
                <Link to={'/'} className="footer-brand-link" reloadDocument>
                    <img src={brand} alt="Flixnet" />
                </Link>
            </div>

            <div className="footer-content-info">
                <p className="movie-base">Flixnet is  not affiliated with Netflix, Funflix, or any other stream platform or movie studio.</p>
                <p className="movie-base">Made with love by <span className="footer-luis">Luis Hernandez</span>.</p>
                <p className="movie-base">Like this site ? Please check my <a href="https://hernluis.com/" target="_blank" className="base-link">Page</a></p>
            </div>
        </div>
    );
}

export default Footer;