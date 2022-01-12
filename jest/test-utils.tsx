/* eslint-disable import/export */
import { render as rltRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import tokenReducer from '../src/features/tokenSlice'
import connectionReducer from '../src/features/connectionSlice'
import userReducer from '../src/features/userInfosSlice'
import { Route, MemoryRouter, Routes } from 'react-router-dom'
import { fetchApi } from '../src/app/services/fetchApi'

const render = (
  ui: any,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        [fetchApi.reducerPath]: fetchApi.reducer,
        connection: connectionReducer,
        jwt: tokenReducer,
        user: userReducer,
      },
      preloadedState,
    }),
    route = '/',
    initialEntries = '/',
    ...renderOptions
  }: any = {}
) => {
  const Wrapper = ({ children }: any) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialEntries]}>
          <Routes>
            <Route path={route} element={children} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )
  }
  return rltRender(ui, { wrapper: Wrapper, ...renderOptions })
}

const connectedPreloadedState = {
  jwt: {
    token: 'valid token',
  },
  connection: {
    status: 'connected',
  },
  user: {
    firstName: 'Tony',
    lastName: 'Stark',
  },
}

export * from '@testing-library/react'
export { render, connectedPreloadedState }
