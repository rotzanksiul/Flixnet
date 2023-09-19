import userImg from '../movieimg/user.png'
import iconImg from '../movieimg/brand.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return ( 
    <div className="navbar">
        <Link  to={'/'} className="brand">
        <img src={iconImg} alt="Brandicon" />
        </Link>
        
        <Link to={'/user'} className="user-icon">
        <img src={userImg} alt="Usericon" />
        </Link>
    </div> 
    );
}
 
export default Navbar;