import toggleIcon from '../../assets/chevron.svg'
import { Data } from '../../stories/mock-data'
import { EditTransactionField } from '../editTransactionField/EditTransactionField'

interface TransactionProps {
  data: Data
}

export const Transaction = ({ data }: TransactionProps) => {
  const { date, description, amount, balance, type, category, notes } = data
  return (
    <details>
      <summary>
        <div className="icon">
          <img src={toggleIcon} alt="" />
        </div>
        <p className="date">{date}</p>
        <p>{description}</p>
        <p>${amount}</p>
        <p>${balance}</p>
      </summary>
      <ul className="transaction-infos">
        <li>
          <span>Transaction Type:</span>
          <span>{type}</span>
        </li>
        <EditTransactionField value={category} type="Category" />
        <EditTransactionField value={notes} type="Notes" />
      </ul>
    </details>
  )
}
