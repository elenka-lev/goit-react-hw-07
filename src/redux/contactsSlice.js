import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { deleteContact, fetchContacts, addContact } from "./contactsOps";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addMatcher(isAnyOf(addContact.pending, fetchContacts.pending, deleteContact.pending), state => {
                state.isError = false;
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(addContact.rejected, fetchContacts.rejected, deleteContact.rejected), state => {
                state.isLoading = false;
                state.isError = true;
            })
            .addMatcher(isAnyOf(addContact.fulfilled, fetchContacts.fulfilled, deleteContact.fulfilled), state => {
                state.isLoading = false;
                state.isError = false;
            });
    }
})

export const selectContacts = state => state.contacts.items;
export const selectIsError = state => state.contacts.isError;
export const selectIsLoading = state => state.contacts.isLoading;

export const contactReducer = slice.reducer; //іде у стор