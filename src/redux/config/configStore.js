import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../modules/userSlice'
import writeSlice from '../modules/writeSlice'

const store = configureStore({
  reducer: { writes: writeSlice, users: userSlice },
})

export default store
