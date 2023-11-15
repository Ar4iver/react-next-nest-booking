import InputField from '@components/src/components/elements/Fields/InputField'
import Spinner from '@components/src/components/elements/Spinner/Spinner'
import { useAppDispatch, useAppSelector } from '@components/src/hooks/hooks'
import { fetchLogin } from '@components/src/store/slices/user/userThunks'
import { showAuthError } from '@components/src/utils/errors'
import { Button } from '@mui/material'
import { redirect } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isLoading = useAppSelector((state) => state.user.loading)
  const error = useAppSelector((state) => state.user.error)

  useEffect(() => {
    if (error) {
      showAuthError(error)
    }
  }, [error])

  const data = { email, password }

  const dispatch = useAppDispatch()

  ///??????
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await dispatch(fetchLogin(data))
    if (res.payload.msg === 'Logged in') {
      redirect('/')
    }
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
          {isLoading ? <Spinner /> : 'Войти'}
        </Button>
      </form>
    </>
  )
}

export default LoginForm
