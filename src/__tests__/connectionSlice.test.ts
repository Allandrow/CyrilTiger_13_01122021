import reducer, {
  startConnection,
  completeConnection,
  cancelConnection,
} from '../features/connectionSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    status: 'uninitialized',
  })
})

test('should change the status to pending', () => {
  expect(reducer(undefined, startConnection())).toEqual({
    status: 'pending',
  })
})

test('should change the status to connected', () => {
  expect(reducer(undefined, completeConnection())).toEqual({
    status: 'connected',
  })
})

test('should change the status to not connected', () => {
  expect(reducer(undefined, cancelConnection())).toEqual({
    status: 'not connected',
  })
})
