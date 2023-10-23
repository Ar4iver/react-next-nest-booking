import Button from '@components/src/components/elements/Button'
import InputField from '@components/src/components/elements/Fields/InputField'
import React from 'react'
const RegisterForm = () => {
  return (
    <>
      <form>
        <InputField autoFocus name="username" label="Имя" fullWidth />
        <InputField autoFocus name="lastname" label="Фамилия" fullWidth />
        <InputField name="email" label="Почта" fullWidth />
        <InputField
          autoFocus
          name="password"
          label="Придумайте пароль"
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
