import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../features/tokenSlice'
import userInfosReducer from '../features/userInfosSlice'
import connectionReducer from '../features/connectionSlice'
import { fetchApi } from './services/fetchApi'

const store = configureStore({
  reducer: {
    [fetchApi.reducerPath]: fetchApi.reducer,
    connection: connectionReducer,
    jwt: tokenReducer,
    user: userInfosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
