// Navbar.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from './clg.webp';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="SKCT Logo" className="logo-image" />
          <div className="logo-text">
            <span>Sri Krishna College of Technology</span><br />
            <small>An Autonomous Institution | Accredited by NAAC with 'A' Grade</small>
          </div>
        </Link>
        <ul className="navbar-links">
          <li className="navbar-item"><Link to="/" className="no-underline">Home</Link></li>
          <li className="navbar-item"><Link to="#" className="no-underline">About Us</Link></li>
          <li className="navbar-item"><Link to="#" className="no-underline">Work</Link></li>
          <li className="navbar-item"><Link to="#" className="no-underline">Info</Link></li>
          {isLoggedIn ? (
            <>
              <li className="navbar-item"><Link to="/dashboard" className="no-underline">{user.name || user.email}</Link></li>
              <li className="navbar-item"><button onClick={handleLogout} className="no-underline">Logout</button></li>
            </>
          ) : (
            <li className="navbar-item"><Link to="/admin" className="no-underline">Admin</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
