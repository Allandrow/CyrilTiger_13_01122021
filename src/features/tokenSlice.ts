import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('authToken'),
}

const tokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    removeToken(state) {
      state.token = null
    },
  },
})

export const { setToken, removeToken } = tokenSlice.actions

export default tokenSlice.reducer
