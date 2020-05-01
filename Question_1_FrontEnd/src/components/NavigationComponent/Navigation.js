import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About Us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation;