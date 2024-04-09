import React, { useState } from 'react';
import classes from './prolog.module.css';
import AnimationArrow from '../../../common/animationArrow/animationArrow';
import prolog from '../../../../data/prolog';

const Prolog = () => {
    const [prologVisibility, setPrologVisibility] = useState(false);
    const handlePrologStatus = () => {
        setPrologVisibility((prevState) => !prevState);
    };
    return (
        <div className={classes.prologWrap}>
            <div
                className={
                    classes.prologTextBlock +
                    ' ' +
                    (prologVisibility && classes.prologVisible)
                }
            >
                {prolog}
            </div>
            <div className={classes.prologBtnWrap}>
                <AnimationArrow
                    onClick={handlePrologStatus}
                    arrowDown={prologVisibility}
                />
            </div>
        </div>
    );
};

export default Prolog;
