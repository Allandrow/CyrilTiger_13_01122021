import reducer from '../features/tokenSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    token: null,
  })
})
