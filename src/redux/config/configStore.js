import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/userSlice";
import postSlice from "../modules/postSlice";


const store = configureStore({
    reducer:{ posts:postSlice, users:userSlice }
})


export default store