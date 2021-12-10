import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: null,
  lastName: null,
}

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    getUser(state, action) {
      // stuff
    },
    updateUser(state, action) {
      // stuff
    },
  },
})

export const { getUser, updateUser } = userInfosSlice.actions

export default userInfosSlice.reducer
