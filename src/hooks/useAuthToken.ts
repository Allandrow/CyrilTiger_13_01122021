import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export const useAuthToken = () => {
  const jwt = useSelector((state: RootState) => state.auth.token)
  return useMemo(() => ({ jwt }), [jwt])
}
