import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav  style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'burlywood',
        padding: '10px 20px',
        zIndex: 1000, }}>
            <ul style={{
          listStyle: 'none',
          justifyContent: 'space-evenly',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
        }}>
                <li>
                    <Link style={{ color: "green", }} to="/home">Home</Link>
                </li>
                <li>
                    <Link style={{ color: "green", }} to="/about">About</Link>
                </li>
                <li>
                    <Link style={{ color: "green", }}  to="/service">Service</Link>
                </li>
                <li>
                    <Link style={{ color: "green", }}  to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;