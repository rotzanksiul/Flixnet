import './App.css';
import data from './data/data'
import Header from './components/Header';
import Row from './components/Row';
import Banner from './components/Banner';

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Row title='New On Flixnet' movies={data.trending}></Row>
            <Row title='drama' movies={data.drama}></Row>
            <Banner movies={data.horror}></Banner>
            <Row title='action' movies={data.action}></Row>
            <Row title='comedies' movies={data.comedy}></Row>
            <Banner movies={data.action}></Banner>
            <Row title='horror' movies={data.horror}></Row>
        </div>
    );
}

export default Home;