import React, { useEffect, useState } from 'react';
import classes from './commonPage.module.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from '../../ui/header/header';
import Keepers from '../keepers/keepers';
import About from '../about/about';
import { useDispatch } from 'react-redux';
import { setActiveLink } from '../../../../redux/activeLinkReducer';

const CommonPage = () => {
    const dispatch = useDispatch();
    const [isPageVisible, setIsPageVisible] = useState(false);
    const [toggleNav, setToggleNav] = useState(true);
    const navigate = useNavigate();
    const crossfade = (link) => {
        setIsPageVisible(false);
        setTimeout(() => {
            setToggleNav((prevState) => !prevState);
            dispatch(setActiveLink(link));
            navigate(link);
        }, 300);
    };
    useEffect(() => {
        setTimeout(() => {
            setIsPageVisible(true);
        }, 10);
    }, [toggleNav]);
    return (
        <div
            className={
                classes.commonPageWrap +
                ' ' +
                (isPageVisible ? classes.pageVisible : classes.pageInvisible)
            }
        >
            <Header crossfade={crossfade} />
            <Routes>
                <Route path='keepers' element={<Keepers />} />
                <Route path='about' element={<About />} />
            </Routes>
        </div>
    );
};

export default CommonPage;
