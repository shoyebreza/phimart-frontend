import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            {/* <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            <Link to="/about">About</Link> */}
            <NavLink to="/" className={({isActive})=> (isActive ? 'text-blue-700':'')}>Home</NavLink>
            <NavLink to="/products" className={({isActive})=> (isActive ? 'text-blue-700':'')}>Product</NavLink>
            <NavLink to="/about" className={({isActive})=> (isActive ? 'text-blue-700':'')}>About</NavLink>
        </div>
    );
};

export default Navbar;