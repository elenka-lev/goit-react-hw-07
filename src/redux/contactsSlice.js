import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"
import { deleteContact, fetchContacts, addContact } from "./contactsOps";
import { selectFilter } from "./filtersSlice";


const initialState = {
    items: [],
    loading: false,
    error: false,
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
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addMatcher(isAnyOf(addContact.pending, fetchContacts.pending, deleteContact.pending), state => {
                state.error = false;
                state.loading = true;
            })
            .addMatcher(isAnyOf(addContact.rejected, fetchContacts.rejected, deleteContact.rejected), state => {
                state.loading = false;
                state.error = true;
            })
            .addMatcher(isAnyOf(addContact.fulfilled, fetchContacts.fulfilled, deleteContact.fulfilled), state => {
                state.loading = false;
                state.error = false;
            });
    }
})



export const selectContacts = state => state.contacts.items;
export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;

//мемоізація селекторів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactReducer = slice.reducer; //іде у стор