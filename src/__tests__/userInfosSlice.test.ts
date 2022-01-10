import reducer, { setUser, removeUser } from '../features/userInfosSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    firstName: undefined,
    lastName: undefined,
  })
})

test('should update the state with new values', () => {
  const user = {
    firstName: 'prénom',
    lastName: 'nom',
  }
  expect(reducer(undefined, setUser(user))).toEqual(user)
})

test('should reset the state', () => {
  const user = {
    firstName: 'prénom',
    lastName: 'nom',
  }
  reducer(undefined, setUser(user))
  expect(reducer(undefined, removeUser())).toEqual({
    firstName: undefined,
    lastName: undefined,
  })
})
