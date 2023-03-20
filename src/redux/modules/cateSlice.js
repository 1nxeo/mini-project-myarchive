import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cates: "",
}


const cateSlice = createSlice({
  name: 'cates',
  initialState,
  reducers:{
    changeCates: (state, action) => {
        return action.payload
    }
  },
  extraReducers: {
}})
export const {changeCates} = cateSlice.actions
export default cateSlice.reducer

