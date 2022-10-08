import styles from '../styles/Home.module.scss'
import React from 'react';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    return(
        <div className={styles.burgerIcon} open={open} onClick={() => setOpen(!open)} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
export default Burger