import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { cookies } from '../../shared/cookies'
// import apis from '../../shared/axios'
import api from '../../axios/api'
// apis 사용하면 헤더에 토큰 있음 : 로그인 된 유저가 요청 시 사용

const initialState = {
  users: [],
  admins: [],
  posts: [],
  isLoading: false,
  error: null,
}

// admin 로그인 Thunk 함수
export const __loginAdmin = createAsyncThunk('loginAdmin', async (payload, thunkAPI) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/admin`, payload)
    const { token } = response.headers
    cookies.set('adminToken', token, { path: '/', maxAge: 600 })
    return thunkAPI.fulfillWithValue(payload)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// admin 게시물 조회 Thunk 함수
export const __getPostAdmin = createAsyncThunk('__getPostAdmin', async (payload, thunkAPI) => {
  try {
    const response = await api.get(`/admin/posts`)
    return thunkAPI.fulfillWithValue(response.data.posts)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// admin 유저 조회 함수
export const __getUserAdmin = createAsyncThunk('__getUserAdmin', async (payload, thunkAPI) => {
  try {
    const response = await api.get(`/admin/users`)
    return thunkAPI.fulfillWithValue(response.data.users)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// admin 회원 삭제 함수
export const __deleteUserAdmin = createAsyncThunk('__deleteUserAdmin', async (payload, thunkAPI) => {
  try {
    const response = await api.delete(`/admin/users/${payload}`)
    console.log(response)
    return thunkAPI.fulfillWithValue(response.data.users)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
// admin 게시물 삭제 함수
export const __deletePostAdmin = createAsyncThunk('__deletePostAdmin', async (payload, thunkAPI) => {
  try {
    const response = await api.delete(`/admin/posts/${payload}`)
    return thunkAPI.fulfillWithValue(response)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const adminSlice = createSlice({
  name: 'admins',
  initialState,
  extraReducers: {
    // admin 로그인 Reducer -------------------------------
    [__loginAdmin.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__loginAdmin.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.admins = action.payload
    },
    [__loginAdmin.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // admin 게시물 조회 Reducer -------------------------------
    [__getPostAdmin.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getPostAdmin.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.posts = action.payload
    },
    [__getPostAdmin.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // admin 유저 조회 Reducer -------------------------------
    [__getUserAdmin.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getUserAdmin.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.users = action.payload
    },
    [__getUserAdmin.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // admin 회원 삭제 Reducer -------------------------------
    [__deleteUserAdmin.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__deleteUserAdmin.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.users = [...state.users, action.payload]
    },
    [__deleteUserAdmin.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // admin 게시물  삭제 Reducer -------------------------------
    [__loginAdmin.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__loginAdmin.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.posts = [...state.posts, action.payload]
    },
    [__loginAdmin.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const {} = adminSlice.actions
export default adminSlice.reducer
