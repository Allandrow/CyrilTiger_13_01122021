import { ChangeEvent, SyntheticEvent, useState } from 'react'
import editIcon from '../../assets/edit-pencil.svg'

interface FieldProps {
  value: string | null
  type: string
}

export const EditTransactionField = ({ value, type }: FieldProps) => {
  const [fieldValue, setFieldValue] = useState(value)
  const [showForm, setShowForm] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    fetch(`transactions/1/${type}`, {
      method: 'PUT',
      body: fieldValue,
    })
    setShowForm((state) => !state)
  }

  return (
    <li>
      <span>{type} :</span>
      {showForm && (
        <form>
          <input
            type="text"
            placeholder={fieldValue || 'New value'}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </form>
      )}
      {!showForm && (
        <>
          <span>{fieldValue}</span>
          <button
            className="editBtn"
            onClick={() => setShowForm((state) => !state)}
          >
            <img src={editIcon} alt="" />
          </button>
        </>
      )}
    </li>
  )
}
