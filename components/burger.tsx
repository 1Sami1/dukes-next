import styles from '../styles/Home.module.scss'
import React from 'react';
import { bool, func } from 'prop-types';

const Burger = () => {
    return(
        <div className={styles.burgerIcon}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Burger