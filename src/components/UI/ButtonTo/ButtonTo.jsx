import React from 'react';
import { Link } from 'react-scroll';
import styles from '../Button/Button.module.scss';

const ButtonTo = ({ to, children }) => {
    return (
        <Link className={styles.btn} to={to} spy={true} smooth={true}>
            {children}
        </Link>
    );
}

export { ButtonTo };