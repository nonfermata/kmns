import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
    name: 'burger',
    initialState: { isVisible: false },
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

const { toggle } = burgerSlice.actions;
const burgerReducer = burgerSlice.reducer;

export const toggleBurger = () => toggle();

export const getBurgerStatus = () => (state) => state.burger.isVisible;

export default burgerReducer;
