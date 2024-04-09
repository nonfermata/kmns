/* eslint-disable indent */
import React from 'react';
import classes from './burger.module.css';
import menu from '../../../data/menu';

const BurgerNavBar = ({ addedMenuStyle, handleFade, isMainPage }) => {
    return (
        <nav className={classes.burgerMenu + ' ' + addedMenuStyle}>
            {!isMainPage && (
                <div
                    onClick={() => handleFade('../')}
                    className={classes.burgerLink}
                >
                    Главная
                </div>
            )}

            {menu.map(({ id, link, name }) => (
                <div
                    key={id}
                    onClick={() => handleFade('../' + link)}
                    className={classes.burgerLink}
                >
                    {name}
                </div>
            ))}
        </nav>
    );
};

export default BurgerNavBar;
