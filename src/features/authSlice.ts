import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    logout(state, action) {
      // stuff
    },
  },
})

export const { setToken, logout } = authSlice.actions

export default authSlice.reducer
