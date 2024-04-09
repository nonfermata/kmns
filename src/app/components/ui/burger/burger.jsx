import React from 'react';
import classes from './burger.module.css';
import { useDispatch, useSelector } from 'react-redux';

import BurgerIcon from './burgerIcon';
import BurgerNavBar from './burgerNavBar';
import { getBurgerStatus, toggleBurger } from '../../../../redux/burgerReducer';

const Burger = ({ handleFade, isMainPage = false }) => {
    const dispatch = useDispatch();
    const isBurgerMenuActive = useSelector(getBurgerStatus());
    const addedMenuStyle = isBurgerMenuActive ? '' : classes.hiddenMenu;

    return (
        <div
            className={classes.burgerWrap}
            onClick={() => {
                if (!isBurgerMenuActive) dispatch(toggleBurger());
            }}
        >
            <BurgerIcon isActive={isBurgerMenuActive} />
            <BurgerNavBar
                addedMenuStyle={addedMenuStyle}
                handleFade={handleFade}
                isMainPage={isMainPage}
            />
        </div>
    );
};

export default Burger;
