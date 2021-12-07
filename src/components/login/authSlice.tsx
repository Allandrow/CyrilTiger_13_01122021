import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export type AuthState = {
  token: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { body } }: PayloadAction<{ body: AuthState }>
    ) => {
      state.token = body.token
    },
    removeCredentials: (state) => {
      state.token = null
    },
  },
})

export const { setCredentials, removeCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.token
