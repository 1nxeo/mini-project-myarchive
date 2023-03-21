import { createSlice } from '@reduxjs/toolkit'

const initialState = {cates: "notdone"}


const cateSlice = createSlice({
  name: 'cates',
  initialState,
  reducers:{
    changeCates: (state, action) => {
        return {...state, cates: action.payload}
    }
  },
  extraReducers: {
}})
export const {changeCates} = cateSlice.actions
export default cateSlice.reducer

