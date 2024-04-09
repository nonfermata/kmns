import React from 'react';
import classes from './burger.module.css';
import CrossIcon from '../burger/crossIcon/crossIcon';

const BurgerIcon = ({ isActive }) => {
    return (
        <>
            {isActive ? (
                <CrossIcon />
            ) : (
                <>
                    <div className={classes.burgerLine}></div>
                    <div className={classes.burgerLine}></div>
                    <div className={classes.burgerLine}></div>
                </>
            )}
        </>
    );
};

export default BurgerIcon;
