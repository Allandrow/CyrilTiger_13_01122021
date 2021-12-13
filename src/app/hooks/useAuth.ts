import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const useAuth = () => {
  const userToken = useSelector((state: RootState) => state.auth.token)
  return useMemo(() => ({ userToken }), [userToken])
}
