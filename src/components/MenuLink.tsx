import React from 'react'
import { Link } from 'react-router-dom';

const MenuLink = () => {
    return (<>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/festival" data-bs-toggle="dropdown">Festival</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/blog" data-bs-toggle="dropdown">Blog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/food" data-bs-toggle="dropdown">Food</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact" data-bs-toggle="dropdown">Contact</Link>
            </li>
        </ul>
    </>

    );
};

export default MenuLink;