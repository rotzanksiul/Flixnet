import './Header.css'


const UserPage = () => {
    return (
        <div className="user-page">
            <div className="user-page-header header" style={{height: "100vh"}}>
                <div className="header-bg-image"></div>
                <div className="gradient-top"></div>
                <div className="header-text">
                <p className='p-base' style={{fontSize: "1.5rem"}}>You are Awesome!!.</p>
                    <h2 className='header-text-title headtext' style={{fontSize: "3rem"}} >Thank you for visiting FLIXNET</h2>
                    <p className='p-base' style={{fontSize: "1.5rem"}}>If you liked my project please check my <a target='blank' className='base-link' href="https://hernluis.com/">Portafolio</a> to see more of my creations.</p>  
                </div>
            </div>
        </div>

    );
}

export default UserPage;