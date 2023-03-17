import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";


const initialState = {
    wishes:[],
    isLoading: false,
    error:null,
};



const postSlice =createSlice({
    name:'wishes',
    initialState,
    reducers:{

    },
    extraReducers:{

    }

})

export const { } = postSlice.actions;
export default postSlice.reducer;