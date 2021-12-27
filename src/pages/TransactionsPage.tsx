import { useEffect, useState } from 'react'
import '../css/transactions.css'
import { TransactionsList } from '../components/transactionsList/TransactionsList'
import type { Data } from '../stories/mock-data'

export const TransactionsPage = () => {
  const [data, setData] = useState([] as (Data | never)[])

  useEffect(() => {
    fetch('/transactions/1')
      .then((res) => res.json())
      .then((res) => setData(res.data))
  }, [])

  return (
    <main>
      <section className="account">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </section>
      {data.length === 0 && (
        <section>
          <h2>No recent transactions</h2>
        </section>
      )}
      {data.length > 0 && (
        <section className="transactions">
          <ul className="transactions-header">
            <li>Date</li>
            <li>Description</li>
            <li>Amount</li>
            <li>Balance</li>
          </ul>
          <TransactionsList data={data} />
        </section>
      )}
    </main>
  )
}
