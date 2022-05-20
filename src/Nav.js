import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>(
    <nav>
        <ul className="nav nav-tabs">
            <li className="nav-item pb-6">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item pb-6">
                <Link to="/create">Create</Link>
            </li>
        </ul>
    </nav>
);
export default Nav;