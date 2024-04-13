import React from 'react';
import classes from './header.module.css';
import Navbar from './navbar/navbar';

const Header = ({ crossfade }) => {
    return (
        <div className={classes.headerWrap}>
            <Navbar crossfade={crossfade} />
        </div>
    );
};

export default Header;
