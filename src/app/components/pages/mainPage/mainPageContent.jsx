import React, { useEffect, useState } from 'react';
import classes from './mainPage.module.css';
import prolog from '../../../data/prolog';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import { setActiveLink } from '../../../../redux/activeLinkReducer';

const MainPageContent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isFirstRender = !localStorage.getItem('mainPageLoaded');
    const [isPageVisible, setPageIsVisible] = useState(!isFirstRender);
    const hraniteli = 'ХРАНИТЕЛИ СЕВЕРА'.split('');
    const initialState = hraniteli.map(() => '');
    const [lettersStyles, setLetterStyles] = useState(initialState);
    const [subTitleStyle, setSubTitleStyle] = useState('');
    const [arrowStyle, setArrowStyle] = useState('');
    useEffect(() => {
        if (isFirstRender) {
            setTimeout(() => {
                setPageIsVisible(true);
            }, 10);
            localStorage.setItem('mainPageLoaded', 'ok');
        }
    }, []);
    useEffect(() => {
        if (!lettersStyles[lettersStyles.length - 1]) {
            const index = lettersStyles.findIndex((item) => !item);
            const time = index === 0 && isFirstRender ? 1500 : 150;
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
                setTimeout(() => {
                    setArrowStyle(classes.scrollArrowWrapVisible);
                }, 500);
            }, 700);
        }
    }, [lettersStyles]);
    const crossfade = () => {
        setPageIsVisible(false);
        setTimeout(() => {
            dispatch(setActiveLink('keepers'));
            navigate('main/keepers');
        }, 300);
    };
    return (
        <div
            className={
                isPageVisible ? classes.pageVisible : classes.pageInvisible
            }
        >
            <div className={classes.mainImgSuperWrap}>
                <div
                    className={
                        classes.mainImgWrap +
                        ' ' +
                        (isPageVisible ? classes.startImgVisible : '')
                    }
                >
                    <div className={classes.mainTitleWrap}>
                        <div className={classes.mainTitle}>
                            {hraniteli.map((item, index) => (
                                <span
                                    className={lettersStyles[index]}
                                    key={item + String(index)}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div
                            className={
                                classes.mainSubTitle + ' ' + subTitleStyle
                            }
                        >
                            Коренные малочисленные народы Таймыра
                            в&nbsp;монологах их&nbsp;представителей
                        </div>
                        <div
                            className={
                                classes.scrollArrowWrap + ' ' + arrowStyle
                            }
                        >
                            <Link
                                to='idProlog'
                                duration={1000}
                                smooth={true}
                                className={classes.scrollArrow}
                            >
                                <div className={classes.arrowLeftLine}></div>
                                <div className={classes.arrowMidLine}></div>
                                <div className={classes.arrowRightLine}></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.prologWrap} id='idProlog'>
                {prolog.map((item) => (
                    <p key={item}>{item}</p>
                ))}
                <button className={classes.startButton} onClick={crossfade}>
                    Перейти на сайт »
                </button>
            </div>
        </div>
    );
};
export default MainPageContent;
