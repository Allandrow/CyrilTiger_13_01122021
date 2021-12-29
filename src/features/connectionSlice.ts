import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'uninitialized',
}

const connectionSlice = createSlice({
  name: 'connectionStatus',
  initialState,
  reducers: {
    startConnection(state) {
      state.status = 'pending'
    },
    completeConnection(state) {
      state.status = 'connected'
    },
    cancelConnection(state) {
      state.status = 'not connected'
    },
  },
})

export const { startConnection, completeConnection, cancelConnection } =
  connectionSlice.actions

export default connectionSlice.reducer
