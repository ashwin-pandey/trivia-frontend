import { 
  BrowserRouter as Router, 
  Link, 
  Route, 
  Routes 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './pages/common/Home';
import About from './pages/common/About';
import Contact from './pages/common/Contact';
import Questions from './pages/questions/Questions';
import Settings from './pages/questions/Settings';
import FinalScore from './pages/questions/FinalScore';

function App() {
  return (
    <Router>
      <div className="" style={{ 
        backgroundImage: `url('restaurant.png')`,
        height: `100vh`
       }}>
        {/* header */}
        <div className='navbar' style={{ backgroundColor: `#ffffff` }}>
          <ul className="nav mx-auto">
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <hr className='mt-0' />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/questions' element={< Questions />}></Route>
          <Route exact path='/settings' element={< Settings />}></Route>
          <Route exact path='/score' element={< FinalScore />}></Route>
        </Routes>

        {/* footer */}
        <footer className='bg-secondary text-center text-light fixed-bottom p-2'>
          © 2023 Copyright
        </footer>
      </div>
    </Router>
  );
}

export default App;
