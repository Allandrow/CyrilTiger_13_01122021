import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfosMutation } from '../app/services/fetchApi'
import { setToken } from '../features/authSlice'
import { setUser } from '../features/userInfosSlice'
import { MainLayout } from '../layout/MainLayout'
import { useAuthToken } from '../hooks/useAuthToken'
import { ProfileHeader } from '../components/profileHeader/ProfileHeader'
import { RootState } from '../app/store'

export const UserPage = () => {
  const [getUserInfos, { isLoading, isSuccess }] = useGetUserInfosMutation()
  const userInfos = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userToken } = useAuthToken()

  useEffect(() => {
    const token = userToken || localStorage.getItem('authToken')

    if (token) {
      dispatch(setToken(token))
      getUserInfos('')
        .unwrap()
        .then((res) => dispatch(setUser(res)))
        .catch(() => {
          localStorage.removeItem('authToken')
          navigate('/')
        })
    } else {
      navigate('/')
    }
  }, [])

  if (isLoading) {
    return (
      <MainLayout>
        <h1>LOADING</h1>
      </MainLayout>
    )
  }

  if (isSuccess) {
    return (
      <MainLayout classNames={['main', 'bg-dark']}>
        <ProfileHeader name={userInfos} />
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </MainLayout>
    )
  }

  return null
}

// TODO : types
