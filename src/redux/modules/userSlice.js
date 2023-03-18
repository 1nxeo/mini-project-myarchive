import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookies from "../../shared/cookies";
import apis  from "../../shared/axios";
// import { v4 as uuidv4 } from "uuid";


const initialState = {
    users:[],
    isLoading: false,
    error:null,
    loggedIn:false
};


export const __addUsers = createAsyncThunk(
    "users/addUsers",
    async (payload, thunkAPI) => {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, payload);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  export const __checkUserId = createAsyncThunk(
    "users/checkUserId",
    async (payload, thunkAPI) => {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/register/check-id`, payload);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  export const __checkUserNick = createAsyncThunk(
    "users/checkUserNick",
    async (payload, thunkAPI) => {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/register/check-nick`, payload);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  // export const __loginUser = createAsyncThunk(
  //   "users/loginUser",
  //   async (payload, thunkAPI) => {
  //       try {
  //         const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, payload);
  //         const {token} = response.data
  //         cookies.set("token", token,{path:'/'})
  //         return thunkAPI.fulfillWithValue(payload)
  //       } catch (error) {
  //         return thunkAPI.rejectWithValue(error)
  //       }
  //     }
  // );




const userSlice =createSlice({
    name:'users',
    initialState,
    reducers:{
    },
    extraReducers:{
        [__addUsers.pending]: (state) => {
            state.isLoading = true;
          },
          [__addUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload
          },
          [__addUsers.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
            // alert(`${state.error.errorMessage}`)
          },
          [__checkUserId.pending]: (state) => {
            state.isLoading = true;
          },
          [__checkUserId.fulfilled]: (state, action) => {
            state.isLoading = false;
          },
          [__checkUserId.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
            alert(`사용할 수 없는 아이디입니다!`)
          },
          [__checkUserNick.pending]: (state) => {
            state.isLoading = true;
          },
          [__checkUserNick.fulfilled]: (state, action) => {
            state.isLoading = false;
          },
          [__checkUserNick.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
            alert(`사용할 수 없는 닉네임입니다!`)
          },
          // [__loginUser.pending]: (state) => {
          //   state.isLoading = true;
          // },
          // [__loginUser.fulfilled]: (state, action) => {
          //   state.isLoading = false;
          //   state.users = action.payload;
          //   state.loggedIn = true
          // },
          // [__loginUser.rejected]: (state, action) => {
          //   state.isLoading = false; 
          //   state.error = action.payload; 
          // },
    }

})

export const { } = userSlice.actions;
export default userSlice.reducer;