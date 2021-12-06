import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../components/login/authSlice'

export const useAuth = () => {
  const userToken = useSelector(selectCurrentUser)

  return useMemo(() => ({ userToken }), [userToken])
}
