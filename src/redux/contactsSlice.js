import { createSlice } from "@reduxjs/toolkit"
import { deleteContact, fetchContacts, addContact } from "./contactsOps";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        //addContact це action, котрий буде виконуватися
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        removeContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id  !== action.payload)
        },
    },
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
    }
})

export const selectContacts = state => state.contacts.items;

export const contactReducer = slice.reducer; //іде у стор