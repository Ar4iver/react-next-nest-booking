import Button from '@components/src/components/elements/Button'
import InputField from '@components/src/components/elements/Fields/InputField'
import { fetchRegister } from '@components/src/store/slices/user/userThunks'
import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
const RegisterForm = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const data = { firstname, lastname, email, password }

  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(fetchRegister(data))
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
          Зарегистрироваться
        </Button>
      </form>
    </>
  )
}

export default RegisterForm
