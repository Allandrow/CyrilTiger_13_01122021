import { useSelector } from 'react-redux'
import { MainLayout } from '../layout/MainLayout'
import { ProfileHeader } from '../components/profileHeader/ProfileHeader'
import { RootState } from '../app/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserPage = ({ fetchState }: any) => {
  const { isLoading, isSuccess, isError } = fetchState
  const userInfos = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!userInfos.firstName && isError) {
      navigate('/')
    }
  }, [fetchState, userInfos])

  if (isLoading) {
    return (
      <MainLayout>
        <h1>Loading</h1>
      </MainLayout>
    )
  }

  if (isSuccess || userInfos.firstName) {
    return (
      <MainLayout>
        <main className="main bg-dark">
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
        </main>
      </MainLayout>
    )
  }

  return null
}

// TODO : types
