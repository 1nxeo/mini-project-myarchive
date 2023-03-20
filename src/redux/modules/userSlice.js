import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cookies } from "../../shared/cookies";
import jwt_decode from "jwt-decode";
// import apis  from "../../shared/axios";
// import { v4 as uuidv4 } from "uuid";


const initialState = {
    users:[],
    isLoading: false,
    error:null,
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

  export const __loginUser = createAsyncThunk(
    "users/loginUser",
    async (payload, thunkAPI) => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, payload);
          const {token} = response.headers
          // const decode = jwtDecode()
          // const decodeData = jwt_decode(token)
          // console.log(decodeData);
          console.log("response",response);
          cookies.set("token", token,{path:'/'})
          cookies.set("accountId", payload.accountId, '/')
          // cookies.set("nick")
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          console.log(error);
          return thunkAPI.rejectWithValue(error.response.status)
        }
      }
  );




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
            alert("회원가입 성공!")
          },
          [__addUsers.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
            alert("회원가입 실패")
          },
          [__checkUserId.pending]: (state) => {
            state.isLoading = true;
          },
          [__checkUserId.fulfilled]: (state, action) => {
            state.isLoading = false;
            alert("사용가능한 아이디입니다!");
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
            alert("사용가능한 닉네임입니다!");
          },
          [__checkUserNick.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
            alert(`사용할 수 없는 닉네임입니다!`)
          },
          [__loginUser.pending]: (state) => {
            state.isLoading = true;
          },
          [__loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          },
          [__loginUser.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
            const errMsg = action.payload
            switch (errMsg){
              case 412:
                return (alert("비밀번호를 확인해주세요!"))
              case 401:
                return (alert("존재하지 않는 유저입니다!"))
              default:
                return alert("로그인 실패! 다시 시도해주세요.")
            }
            
            
            
          },
    }

})

export const { } = userSlice.actions;
export default userSlice.reducer;