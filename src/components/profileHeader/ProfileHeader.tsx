import { useState } from 'react'
import { EditUserForm } from '../editUserForm/editUserForm'

export const ProfileHeader = ({ name: { firstName, lastName } }: any) => {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm((previousState) => !previousState)
  }

  return (
    <div className="header">
      {showForm ? (
        <EditUserForm
          toggle={toggleForm}
          firstName={firstName}
          lastName={lastName}
        />
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}`}
          </h1>
          <button className="edit-button" onClick={toggleForm}>
            Edit Name
          </button>
        </>
      )}
    </div>
  )
}
