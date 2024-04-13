import React from 'react';
import classes from './navbar.module.css';
import menu from '../../../../data/menu';
import { useSelector } from 'react-redux';
import { getActiveLink } from '../../../../../redux/activeLinkReducer';

const Navbar = ({ crossfade }) => {
    const activeLink = useSelector(getActiveLink());
    return (
        <div className={classes.navbarWrap}>
            {menu.map(({ id, name, link }) => (
                <div
                    key={id}
                    className={
                        classes.navbarItem +
                        ' ' +
                        (link === activeLink && classes.activeItem)
                    }
                    onClick={link !== activeLink && (() => crossfade(link))}
                >
                    {name}
                </div>
            ))}
        </div>
    );
};

export default Navbar;
