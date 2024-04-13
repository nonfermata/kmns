import { createSlice } from '@reduxjs/toolkit';

const activeLinkSlice = createSlice({
    name: 'activeLink',
    initialState: { value: 'keepers' },
    reducers: {
        set(state, action) {
            state.value = action.payload;
        }
    }
});

const { set } = activeLinkSlice.actions;
const activeLinkReducer = activeLinkSlice.reducer;

export const setActiveLink = (link) => set(link);

export const getActiveLink = () => (state) => state.activeLink.value;

export default activeLinkReducer;
