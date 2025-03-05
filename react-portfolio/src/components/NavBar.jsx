import React from 'react';
import { Link } from 'react-router-dom'; // React Router Link for navigation

const NavBar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navbarListStyle}>
        <li style={navbarItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/contacts" style={linkStyle}>Contacts</Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/projects" style={linkStyle}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#4a90e2',
  padding: '15px 20px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderRadius: '10px',
};

const navbarListStyle = {
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'space-around',
  padding: 0,

};

const navbarItemStyle = {
  fontSize: '18px',
  
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  
};

export default NavBar;
