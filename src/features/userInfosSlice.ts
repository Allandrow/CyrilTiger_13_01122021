import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: undefined,
  lastName: undefined,
  authed: false,
}

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    setUser(state, action) {
      const { firstName, lastName } = action.payload
      state.firstName = firstName
      state.lastName = lastName
      state.authed = true
    },
    removeUser(state) {
      state.firstName = undefined
      state.lastName = undefined
      state.authed = false
    },
  },
})

export const { setUser, removeUser } = userInfosSlice.actions

export default userInfosSlice.reducer
