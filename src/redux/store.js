import { configureStore, combineReducers } from '@reduxjs/toolkit';
import footerReducer from './footerReducer';
import burgerReducer from './burgerReducer';

const reducer = combineReducers({
    footer: footerReducer,
    burger: burgerReducer
});

const store = configureStore({ reducer });

export default store;
