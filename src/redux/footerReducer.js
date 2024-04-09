import { createSlice } from '@reduxjs/toolkit';

const footerSlice = createSlice({
    name: 'footer',
    initialState: { isVisible: true },
    reducers: {
        modify(state, action) {
            state.isVisible = action.payload;
        }
    }
});

const { modify } = footerSlice.actions;
const footerReducer = footerSlice.reducer;

export const modifyFooter = (status) => modify(status);

export const getFooterStatus = () => (state) => state.footer.isVisible;

export default footerReducer;
