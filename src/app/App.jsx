import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBurgerStatus, toggleBurger } from '../redux/burgerReducer';
import MainPage from './components/pages/mainPage/mainPage';
import ResetButton from './components/common/resetButton/resetButton';
// import nbsp from './utils/nbsp';

const App = () => {
    if (!localStorage.getItem('secret')) {
        let word = prompt('Введите заветное слово:');
        while (word !== 'Выдра') {
            word = prompt('Это не оно. Введите заветное слово:');
        }
        localStorage.setItem('secret', 'ok');
    }

    const dispatch = useDispatch();
    const isBurgerMenuActive = useSelector(getBurgerStatus());
    const handleClick = () => {
        if (isBurgerMenuActive) {
            dispatch(toggleBurger());
        }
    };
    return (
        <div className='container' onClick={handleClick}>
            {/*<div>*/}
            {/*    {nbsp(prolog).map((item) => (*/}
            {/*        <p key={item}>{item}</p>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <Routes>
                <Route path='/' element={<MainPage />} />
                {/*<Route*/}
                {/*    path='about/:subCutName?/:schoolBlockName?'*/}
                {/*    element={<Category category={'about'} />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path='locations/:location?'*/}
                {/*    element={<Category category={'locations'} />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path='symbols/:symbol?'*/}
                {/*    element={<Category category={'symbols'} />}*/}
                {/*/>*/}
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <ResetButton />
        </div>
    );
};

export default App;
