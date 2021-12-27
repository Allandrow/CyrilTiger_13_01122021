import toggleIcon from '../../assets/chevron.svg'
import { Data } from '../../stories/mock-data'
import editIcon from '../../assets/edit-pencil.svg'

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
        <li>
          <span>Category:</span>
          <span>{category}</span>
          <span className="edit-icon">
            <img src={editIcon} alt="" />
          </span>
        </li>
        <li>
          <span>Notes:</span>
          <span>{notes}</span>
          <span className="edit-icon">
            <img src={editIcon} alt="" />
          </span>
        </li>
      </ul>
    </details>
  )
}
