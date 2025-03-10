import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar' style={navbarStyle}>
      <ul style={navbarListStyle}>
        <li style={navbarItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/contacts" style={linkStyle}>Kontakt</Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/skills" style={linkStyle}>Skills</Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/projects" style={linkStyle}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};


const navbarStyle = {
  backgroundColor: '#00000',
  padding: '15px 20px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderRadius: '35px',
    boxShadow: '0 0 5px black',
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
  color: 'yellow',
  textDecoration: 'none',
  fontWeight: 'bold',
  
};

export default NavBar;