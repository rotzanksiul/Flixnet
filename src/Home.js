import Header from './components/Header';
import Row from './components/Row';
import Banner from './components/Banner';

import './App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [newOnFlixnetMovies, setNewOnFlixnetMovies] = useState([]);

    const getMovies = () => {
        Axios.get('https://flixnet-app-backend.up.railway.app/')
            .then((response) => {
                const allMovies = response.data;

                //Filtering movies for each row
                const drama = allMovies.filter((movie) => movie.category === 'Drama')
                const action = allMovies.filter((movie) => movie.category === 'action')
                const comedy = allMovies.filter((movie) => movie.category === 'comedy')
                const horror = allMovies.filter((movie) => movie.category === 'horror')

                setDramaMovies(drama);
                setActionMovies(action);
                setComedyMovies(comedy);
                setHorrorMovies(horror);
                setMovies(allMovies);

                //Movies for the first row
                const newMovies = allMovies.slice(36,48)
                setNewOnFlixnetMovies(newMovies);
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="home">
            <Header></Header>
            <Row title='New On Flixnet' movies={newOnFlixnetMovies}></Row>
            <Row title='drama' movies={dramaMovies}></Row>
            <Banner movies={movies}></Banner>
            <Row title='action' movies={actionMovies}></Row>
            <Row title='comedies' movies={comedyMovies}></Row>
            <Banner movies={movies}></Banner>
            <Row title='horror' movies={horrorMovies}></Row>
        </div>
    );
}

export default Home;