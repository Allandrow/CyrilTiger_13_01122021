import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import userInfosReducer from '../features/userInfosSlice'
import { fetchApi } from './services/fetchApi'

const store = configureStore({
  reducer: {
    [fetchApi.reducerPath]: fetchApi.reducer,
    auth: authReducer,
    user: userInfosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
