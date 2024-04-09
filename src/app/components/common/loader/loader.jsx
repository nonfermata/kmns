import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './loader.module.css';
import { modifyFooter } from '../../../../redux/footerReducer';

const Loader = () => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        dispatch(modifyFooter(false));
        setTimeout(() => {
            setIsVisible(true);
        }, 1);
    }, []);
    return (
        <div
            className={
                classes.loadersWrap + ' ' + (isVisible && classes.visible)
            }
        >
            <div className={classes.loaderClock}></div>
            <div className={classes.loader}></div>
        </div>
    );
};

export default Loader;
