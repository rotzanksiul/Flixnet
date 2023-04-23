import './Header.css'


const Header = () => {
    return ( 
    <div className="header">
        <div className="header-bg-image"></div>
        <div className="gradient-top"></div>
        <div className="header-text">
            <h2 className='header-text-title headtext'>Welcome to FLIXNET</h2>
            <p className='p-base'>Shows within show? we present to you a collection of films that will transport you to new realms of imagination.</p>
        </div>
    </div> 
    );
}
 
export default Header;