import InputField from '@components/src/components/elements/Fields/InputField'
import { fetchLogin } from '@components/src/store/slices/user/userThunks'
import { Button } from '@mui/material'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const data = { email, password }

  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(fetchLogin(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          label="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button type="submit" size="large" fullWidth>
          Войти
        </Button>
      </form>
    </>
  )
}

export default LoginForm
