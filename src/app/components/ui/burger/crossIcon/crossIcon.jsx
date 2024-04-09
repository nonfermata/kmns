import React from 'react';
import classes from './crossIcon.module.css';

const CrossIcon = () => {
    return (
        <div className={classes.crossWrap} title='Закрыть'>
            <div className={classes.inclinedLineOne}></div>
            <div className={classes.inclinedLineTwo}></div>
        </div>
    );
};

export default CrossIcon;
