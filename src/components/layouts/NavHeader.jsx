import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../styles/NavHeader.css'

function NavHeader() {
  return (
    <nav className="navbar navbar-expand-md navbar-custom-style">
      <Link to="/home" className="navbar-brand align-middle brand-name">Proxima Books</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <FaBars className="text-light"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav options-area">
          <li className="nav-item">
            <Link to="/home" className="nav-link nav-option">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link nav-option">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link nav-option">About</Link>
          </li>
        </ul>  
      </div>
    </nav>
  )
}

export default NavHeader