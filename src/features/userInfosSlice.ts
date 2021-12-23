import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: undefined,
  lastName: undefined,
}

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    setUser(state, action) {
      const { firstName, lastName } = action.payload
      state.firstName = firstName
      state.lastName = lastName
    },
    removeUser(state) {
      state.firstName = undefined
      state.lastName = undefined
    },
  },
})

export const { setUser, removeUser } = userInfosSlice.actions

export default userInfosSlice.reducer
