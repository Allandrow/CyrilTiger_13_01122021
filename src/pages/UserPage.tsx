import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetUserInfosMutation } from '../app/services/fetchApi'
import { setToken } from '../features/authSlice'
import { setUser } from '../features/userInfosSlice'
import { MainLayout } from '../layout/MainLayout'
import { useAuthToken } from '../hooks/useAuthToken'

export const UserPage = () => {
  const [getUserInfos, { data, isLoading, isSuccess }] =
    useGetUserInfosMutation()
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
    const { firstName, lastName }: any = data
    return (
      <MainLayout classNames={['main', 'bg-dark']}>
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}`}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
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
