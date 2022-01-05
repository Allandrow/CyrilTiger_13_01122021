import reducer, { removeToken, setToken } from '../features/tokenSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    token: null,
  })
})

test('should update the token', () => {
  const previousState = { token: null }
  const token = 'New token'
  expect(reducer(previousState, setToken(token))).toEqual({
    token,
  })
})

test('should remove the token', () => {
  const previousState = { token: 'Old token' }
  expect(reducer(previousState, removeToken())).toEqual({
    token: null,
  })
})
