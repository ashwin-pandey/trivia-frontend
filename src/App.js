import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/common/Home';
import About from './components/common/About';
import Contact from './components/common/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* header */}
        <div className='navbar'>
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
