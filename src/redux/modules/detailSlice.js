import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import apis from '../../shared/axios'
import api from '../../axios/api'
// apis 사용하면 헤더에 토큰 있음 : 로그인 된 유저가 요청 시 사용

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  comments: [],
}

// 게시물 디테일 조회 Thunk 함수
export const __getPostDetail = createAsyncThunk('getPostDetails', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/${payload}`)
    return thunkAPI.fulfillWithValue(response.data.detail)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// 게시물 디테일 댓글 조회 Thunk 함수
export const __getComment = createAsyncThunk('__getComment', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/${payload}/comments`)
    console.log(response.data.detail)
    return thunkAPI.fulfillWithValue(response.data.detail)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// 게시물 디테일 댓글 추가 Thunk 함수
export const __addComment = createAsyncThunk('__addComment', async (payload, thunkAPI) => {
  try {
    const newComment = { comment: payload.comment }
    const response = await api.post(`/post/${payload.params}/comments`, newComment)
    return thunkAPI.fulfillWithValue(response.data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: {
    // 게시물 디테일 조회 Reducer -------------------------------
    [__getPostDetail.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.posts = action.payload
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 게시물 디테일 댓글 조회 Reducer -------------------------------
    [__getComment.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.comments = action.payload
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 게시물 디테일 댓글 추가 Reducer -------------------------------
    [__addComment.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.comments = [...state.comments, action.payload]
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const {} = detailSlice.actions
export default detailSlice.reducer
