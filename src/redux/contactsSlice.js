import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts } from "./operations";


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
    }
})

export const selectContacts = state => state.contacts.items;

export const { addContact, removeContact } = slice.actions; //іде до компоненту
export const contactReducer = slice.reducer; //іде у стор