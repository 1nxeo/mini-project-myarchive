import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apis from '../../shared/axios'

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
}

// 게시물 추가 Thunk 함수
export const __addPost = createAsyncThunk('addPosts', async (payload, thunkAPI) => {
  try {
    const response = await apis.post(`/post`, payload)
    console.log('response', response)
    return thunkAPI.fulfillWithValue(response.data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// 게시물 조회 Thunk 함수
export const __getPost = createAsyncThunk('getPosts', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`)
    // console.log('response', response.data.posts)
    return thunkAPI.fulfillWithValue(response.data.posts)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    // 게시물 추가 Reducer -------------------------------

    [__addPost.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.posts = action.payload
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 게시물 조회 Reducer -------------------------------

    [__getPost.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.posts = action.payload
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 게시물 조회 Reducer -------------------------------
  },
})
export const {} = postSlice.actions
export default postSlice.reducer