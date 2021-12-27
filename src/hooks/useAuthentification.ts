import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfosMutation } from '../app/services/fetchApi'
import { RootState } from '../app/store'
import { removeToken } from '../features/authSlice'
import { setUser } from '../features/userInfosSlice'
import { useAuthToken } from './useAuthToken'

export const useAuthentification = () => {
  const authed = useSelector((state: RootState) => state.user.authed)
  const { jwt } = useAuthToken()
  const dispatch = useDispatch()
  const [getUserInfos, { isLoading, isError, isSuccess }] =
    useGetUserInfosMutation()

  useEffect(() => {
    if (jwt && !authed) {
      getUserInfos('')
        .unwrap()
        .then((res) => dispatch(setUser(res)))
        .catch(() => {
          localStorage.clear()
          dispatch(removeToken())
        })
    }
  }, [])

  if (!jwt) return { isError: true }
  return { isLoading, isError, isSuccess }
}
