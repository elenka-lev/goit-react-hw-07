import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: '',
}

const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, actions) => {
            state.filter = actions.payload;
        }
    }
})

export const selectFilter = state => state.filter.filter;

export const filterContacts = slice.reducer;
export const { changeFilter } = slice.actions;