import React from 'react';
import {NavLink} from 'react-router-dom'

export  const Navbar: React.FC = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper purple darken-2 px1">
                    <a href="/" className="brand-logo">React + TS</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/">Список дел</NavLink></li>
                        <li><NavLink to="/about">О нас</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
