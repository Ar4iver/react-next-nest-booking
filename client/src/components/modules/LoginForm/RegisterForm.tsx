import { TextField } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, useForm } from '../../../../hooks'
import { getAuthErrors, signUp } from '../../../../store/users'
import { UserType } from '../../../types/types'
import Button from '../../elements/Button/Button'
import { InputField } from '../../../common/Fields'
import withPassword from '../../../common/Fields/HOC/withPassword'
import validatorConfig from './validatorConfig'

const initialData: UserType = {
  username: '',
  email: '',
  password: '',
}

const RegisterForm = () => {
  const { data, errors, handleInputChange, handleKeyDown, validate } = useForm(
    initialData,
    true,
    validatorConfig
  )

  const loginError = useSelector(getAuthErrors())
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (validate(data)) {
      dispatch(signUp(data))
    }
  }

  const InputFieldWithPassword = useMemo(() => withPassword(InputField), [])

  return (
    <>
      <Form
        data={data}
        errors={errors}
        handleChange={handleInputChange}
        handleKeyDown={handleKeyDown}
      >
        <InputField autoFocus name="username" label="Придумайте ваш логин" />
        <InputField name="email" label="Почта" />
        <InputFieldWithPassword
          name="password"
          label="Пароль"
          type="password"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          fullWidth
          disabled={Object.keys(errors).length !== 0}
        >
          Зарегистрироваться
        </Button>
      </Form>
      {loginError && <p className="form__enter-error">{loginError}</p>}
    </>
  )
}

export default RegisterForm
