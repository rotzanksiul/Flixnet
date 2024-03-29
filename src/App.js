import Navbar from './components/Navbar';
import Home from './Home';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import UserPage from './components/UserPage';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {

  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Navbar></Navbar>
        {/* to scroll to top when changing page */}
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home></Home>} ></Route>
          <Route path="/movies/:id" element={<MovieDetails ></MovieDetails>} ></Route>
          <Route path="/user" element={<UserPage></UserPage>} ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
