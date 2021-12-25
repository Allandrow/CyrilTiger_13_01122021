import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfosMutation } from '../app/services/fetchApi'
import { RootState } from '../app/store'
import { removeToken } from '../features/authSlice'
import { removeUser, setUser } from '../features/userInfosSlice'
import { useAuthToken } from './useAuthToken'

export const useAuthentification = () => {
  const authed = useSelector((state: RootState) => state.user.authed)
  const { jwt } = useAuthToken()
  const dispatch = useDispatch()
  const [getUserInfos, { isLoading, isError, isSuccess }] =
    useGetUserInfosMutation()

  useEffect(() => {
    if (!authed && jwt) {
      try {
        getUserInfos('')
          .unwrap()
          .then((res) => dispatch(setUser(res)))
      } catch (err) {
        localStorage.clear()
        dispatch(removeToken())
        dispatch(removeUser())
      }
    }
  }, [authed])

  if (!jwt) return { isError: true }
  return { isLoading, isError, isSuccess }
}
