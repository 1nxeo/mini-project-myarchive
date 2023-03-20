import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apis from '../../shared/axios'
import api from "../../axios/api"

const initialState = {
  memberPosts: [],
  isLoading: false,
  error: null,
}

// 게시물 조회 Thunk 함수

export const __getMemberPosts = createAsyncThunk('getMemberPosts', async (payload, thunkAPI) => {
    try {
      const response = await api.get(`/mypage`)
      // console.log( "response.data",response.data)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      // console.log("error",error);
      return thunkAPI.rejectWithValue(error)
    }
  })

// 게시물 추가 Thunk 함수

// export const __addPost = createAsyncThunk('addPosts', async (payload, thunkAPI) => {
//   try {
//     const response = await apis.post(`/post`, payload)
//     console.log('response', response)
//     return thunkAPI.fulfillWithValue(response.data)
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
// })



const memberSlice = createSlice({
  name: 'members',
  initialState,
  extraReducers: {
    // 멤버 조회 Reducer -------------------------------

    [__getMemberPosts.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getMemberPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.memberPosts = action.payload
    },
    [__getMemberPosts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 게시물 추가 Reducer -------------------------------

    // [__addPost.pending]: (state, action) => {
    //   state.isLoading = true
    //   state.error = false
    // },
    // [__addPost.fulfilled]: (state, action) => {
    //   state.isLoading = false
    //   state.error = false
    //   state.posts = action.payload
    // },
    // [__addPost.rejected]: (state, action) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // },


    // 게시물 조회 Reducer -------------------------------
  },
})
export const {} = memberSlice.actions
export default memberSlice.reducer

