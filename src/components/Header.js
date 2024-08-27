import React from 'react';
import './Header.css';
import profile from '../profile.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Medora</div>
            <nav className="nav">
                <button onClick={() => window.location.href = '#about'}>About us</button>
                <button onClick={() => window.location.href = '#furniture'}>Furniture</button>
                <button onClick={() => window.location.href = '#stores'}>Our Stores</button>
                <button onClick={() => window.location.href = '#blog'}>Blog</button>
            </nav>
            <div className="profile-icon">
                <img src={profile} alt="Profile" />
            </div>
        </header>
    );
};

export default Header;
