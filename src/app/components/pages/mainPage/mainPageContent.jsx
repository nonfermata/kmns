import React, { useEffect, useState } from 'react';
import classes from './mainPage.module.css';

const MainPageContent = () => {
    const hraniteliTitle = 'ХРАНИТЕЛИ СЕВЕРА'.split('');
    const initialState = hraniteliTitle.map(() => '');
    const [lettersStyles, setLetterStyles] = useState(initialState);
    const [subTitleStyle, setSubTitleStyle] = useState('');
    useEffect(() => {
        if (!lettersStyles[lettersStyles.length - 1]) {
            const index = lettersStyles.findIndex((item) => !item);
            const time = index === 0 ? 2000 : 100;
            setTimeout(() => {
                setLetterStyles((prevState) =>
                    prevState.map((item, ind) =>
                        ind === index ? classes.letterShadow : item
                    )
                );
            }, time);
        } else {
            setTimeout(() => {
                setSubTitleStyle(classes.mainSubTitleVisible);
            }, 700);
        }
    }, [lettersStyles]);
    return (
        <div className={classes.mainPageWrap}>
            <div className={classes.mainTitleWrap}>
                <div className={classes.mainTitle}>
                    {hraniteliTitle.map((item, index) => (
                        <span
                            className={lettersStyles[index]}
                            key={item + String(index)}
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className={classes.mainSubTitle + ' ' + subTitleStyle}>
                    Коренные малочисленные народы Таймыра в монологах их
                    представителей
                </div>
            </div>
        </div>
    );
};
export default MainPageContent;
