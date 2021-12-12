import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApi = createApi({
  reducerPath: 'fetchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/',
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
  }),
})

export const { useGetAuthTokenMutation } = fetchApi

// TODO : set interface for type
