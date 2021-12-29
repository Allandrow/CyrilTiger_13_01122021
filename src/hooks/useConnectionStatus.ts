import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfosMutation } from '../app/services/fetchApi'
import { RootState } from '../app/store'
import {
  cancelConnection,
  completeConnection,
  startConnection,
} from '../features/connectionSlice'
import { removeToken } from '../features/tokenSlice'
import { setUser } from '../features/userInfosSlice'

export const useConnectionStatus = () => {
  const connectionStatus = useSelector(
    (state: RootState) => state.connection.status
  )
  const jwt = useSelector((state: RootState) => state.jwt.token)
  const dispatch = useDispatch()
  const [getUserInfos, { isLoading, isError, isSuccess }] =
    useGetUserInfosMutation()

  useEffect(() => {
    if (jwt && connectionStatus !== 'connected') {
      getUserInfos('')
        .unwrap()
        .then((res) => dispatch(setUser(res)))
        .catch(() => {
          localStorage.clear()
          dispatch(removeToken())
        })
    }
    if (!jwt) dispatch(cancelConnection())
  }, [])

  useEffect(() => {
    if (isLoading) dispatch(startConnection())
    if (isError) dispatch(cancelConnection())
    if (isSuccess) dispatch(completeConnection())
  }, [isLoading, isError, isSuccess])

  return useSelector((state: RootState) => state.connection.status)
}
