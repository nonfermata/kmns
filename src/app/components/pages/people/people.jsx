import React from 'react';
import classes from './people.module.css';
import allPeople from '../../../data/book/allPeople';

const People = () => {
    return (
        <div className={classes.peopleWrap}>
            <div className={classes.cardsWrap}>
                {allPeople.map(({ id, icon, frame }, index) => (
                    <>
                        <div
                            key={id}
                            className={
                                classes.cardWrap +
                                ' ' +
                                ((index % 7) % 2 !== 0 && classes.cardWrapDown)
                            }
                        >
                            <img
                                className={classes.cardWrapImg}
                                src={icon}
                                alt='Image'
                            />
                            <img
                                className={classes.cardFrame}
                                src={frame}
                                alt='Image'
                            />
                        </div>
                        {(index + 1) % 7 === 0 && <>&nbsp;</>}
                    </>
                ))}
            </div>
        </div>
    );
};

export default People;
