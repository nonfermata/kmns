import { configureStore, combineReducers } from '@reduxjs/toolkit';
import footerReducer from './footerReducer';
import burgerReducer from './burgerReducer';
import activeLinkReducer from './activeLinkReducer';

const reducer = combineReducers({
    footer: footerReducer,
    burger: burgerReducer,
    activeLink: activeLinkReducer
});

const store = configureStore({ reducer });

export default store;
