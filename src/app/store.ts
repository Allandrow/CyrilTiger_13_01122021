import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import userInfosReducer from '../features/userInfosSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userInfosReducer,
  },
})

export default store
