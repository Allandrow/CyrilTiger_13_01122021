import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAuthToken: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { body: { token: string } }) =>
        response.body.token,
    }),
    getUserInfos: builder.mutation({
      query: () => ({
        url: 'profile',
        method: 'POST',
      }),
      transformResponse: (response: any) => {
        const { firstName, lastName } = response.body
        return { firstName, lastName }
      },
    }),
    updateUserInfos: builder.mutation({
      query: (user) => ({
        url: 'profile',
        method: 'PUT',
        body: user,
      }),
      transformResponse: (response: any) => {
        const { firstName, lastName } = response.body
        return { firstName, lastName }
      },
    }),
  }),
})

export const {
  useGetAuthTokenMutation,
  useGetUserInfosMutation,
  useUpdateUserInfosMutation,
} = fetchApi

// TODO : set interface for types
