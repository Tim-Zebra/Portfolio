import { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';

// Navbar that highlights which link is active
function NavTabs() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname.slice(1));
  
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          onClick={() => setCurrentPage('home')}
          className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          onClick={() => setCurrentPage('about')}
          className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          onClick={() => setCurrentPage('portfolio')}
          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/talents"
          onClick={() => setCurrentPage('talents')}
          className={currentPage === 'talents' ? 'nav-link active' : 'nav-link'}
        >
          Talents
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;