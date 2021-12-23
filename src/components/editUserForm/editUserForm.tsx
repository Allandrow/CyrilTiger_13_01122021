import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useUpdateUserInfosMutation } from '../../app/services/fetchApi'
import { setUser } from '../../features/userInfosSlice'

interface EditUserFormProps {
  toggle: () => void
  firstName: string | undefined
  lastName: string | undefined
}

export const EditUserForm = ({
  toggle,
  firstName,
  lastName,
}: EditUserFormProps) => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '' })
  const [updateUserInfos] = useUpdateUserInfosMutation()
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id
    setFormState((previous) => {
      return {
        ...previous,
        [id]: e.target.value,
      }
    })
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const { firstName, lastName } = formState
    if (firstName !== '' && lastName !== '') {
      try {
        const response = await updateUserInfos(formState).unwrap()
        dispatch(setUser(response))
        toggle()
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      <h1>Welcome back</h1>
      <form className="edit-form">
        <div className="inputs">
          <div className="input-wrapper">
            <input
              type="text"
              id="firstName"
              placeholder={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="lastName"
              placeholder={lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="button" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" className="button cancel" onClick={toggle}>
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
