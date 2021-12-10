import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      // stuff
    },
    logout(state, action) {
      // stuff
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
