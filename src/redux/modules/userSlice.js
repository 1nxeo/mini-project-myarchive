import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";


const initialState = {
    wishes:[],
    isLoading: false,
    error:null,
};



const userSlice =createSlice({
    name:'wishes',
    initialState,
    reducers:{

    },
    extraReducers:{

    }

})

export const { } = userSlice.actions;
export default userSlice.reducer;