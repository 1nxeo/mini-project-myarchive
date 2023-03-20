import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../modules/userSlice'
import postSlice from '../modules/postSlice'
import memberSlice from '../modules/memberSlice'
import detailSlice from '../modules/detailSlice'

const store = configureStore({
  reducer: { posts: postSlice, users: userSlice, members:memberSlice, details:detailSlice },
})

export default store
