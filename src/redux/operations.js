import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";


axios.defaults.baseURL = 'https://674edae7bb559617b26d0105.mockapi.io'


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
        
    } catch (error) {
        console.log(error.message)
    }
});
