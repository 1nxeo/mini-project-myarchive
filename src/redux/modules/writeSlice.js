import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  writes: [],
  isLoading: false,
  error: null,
}

// 게시물 추가 Thunk 함수
export const __addWrite = createAsyncThunk('addWrites', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:4000/posts', payload)
    thunkAPI.fulfillWithValue(response.data)
  } catch (error) {
    console.log('error', error)
    thunkAPI.rejectWithValue(error)
  }
})

// 게시물 조회 Thunk 함수
export const __getWrite = createAsyncThunk('getWirtes', async (payload, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:4000/posts/dsgfdssfg')
    console.log('response.data', response.data)
    thunkAPI.fulfillWithValue(response.data)
  } catch (error) {
    console.log('error', error)
    thunkAPI.rejectWithValue('error')
  }
})

const writeSlice = createSlice({
  name: 'writes',
  initialState,
  extraReducers: {
    // 게시물 추가 Reducer -------------------------------

    [__addWrite.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__addWrite.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.writes = action.payload
    },
    [__addWrite.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 게시물 조회 Reducer -------------------------------

    [__getWrite.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__getWrite.fulfilled]: (state, action) => {
      console.log('action', action)
      state.isLoading = false
      state.error = false
      state.writes = action.payload
    },
    [__getWrite.rejected]: (state, action) => {
      console.log('aaction', action)
      state.isLoading = false
      state.error = action.payload
    },

    // 게시물 조회 Reducer -------------------------------
  },
})
export const {} = writeSlice.actions
export default writeSlice.reducer
