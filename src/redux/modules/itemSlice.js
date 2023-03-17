import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  writes: [],
  isLoading: false,
  error: null,
}

// write 추가 Thunk 함수
export const __addWrite = createAsyncThunk('addItems', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:4001/posts', payload)
    console.log('response', response)

    thunkAPI.fulfillWithValue(response.data)
  } catch (error) {
    console.log('error', error)

    thunkAPI.rejectWithValue(error)
  }
})

const writeSlice = createSlice({
  name: 'writes',
  initialState,
  extraReducers: {
    [__addWrite.pending]: (state, action) => {
      state.isLoading = true
      state.error = false
    },
    [__addWrite.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = false
      state.items = action.payload
    },
    [__addWrite.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default writeSlice.reducer
export const {} = writeSlice.actions
