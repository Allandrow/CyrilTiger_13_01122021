import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: null,
  lastName: null,
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
    updateUser(state, action) {
      // stuff
    },
  },
})

export const { setUser, updateUser } = userInfosSlice.actions

export default userInfosSlice.reducer
