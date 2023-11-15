import Button from '@components/src/components/elements/Button'
import InputField from '@components/src/components/elements/Fields/InputField'
import Spinner from '@components/src/components/elements/Spinner/Spinner'
import { useAppDispatch, useAppSelector } from '@components/src/hooks/hooks'
import { fetchRegister } from '@components/src/store/slices/user/userThunks'
import { showAuthError } from '@components/src/utils/errors'
import React, { FormEvent, useState } from 'react'
const RegisterForm = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isLoading = useAppSelector((state) => state.user.loading)

  const data = { firstname, lastname, email, password }

  const dispatch = useAppDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      dispatch(fetchRegister(data))
    } catch (error) {
      showAuthError(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          autoFocus
          name="firstname"
          label="Имя"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
        />
        <InputField
          autoFocus
          name="lastname"
          label="Фамилия"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
        />
        <InputField
          name="email"
          label="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <InputField
          autoFocus
          name="password"
          label="Придумайте пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button type="submit" fullWidth>
          {isLoading ? <Spinner /> : 'Зарегистрироваться'}
        </Button>
      </form>
    </>
  )
}

export default RegisterForm
