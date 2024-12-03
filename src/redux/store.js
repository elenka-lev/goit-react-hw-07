import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterContacts } from "./filtersSlice";


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterContacts,
    },
})
