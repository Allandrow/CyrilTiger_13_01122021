import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export const useAuthToken = () => {
  const userToken = useSelector((state: RootState) => state.auth.token)
  return useMemo(() => ({ userToken }), [userToken])
}
