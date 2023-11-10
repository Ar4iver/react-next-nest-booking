import React from 'react'
import { Button, Paper } from '@mui/material'
import RegisterForm from '@components/src/components/modules/forms/RegisterForm/RegisterForm'
import Link from 'next/link'

const SignUp = () => {
  return (
    <>
      <div className="login-form__wrapper">
        <Paper elevation={3} className="form-card login-form__card">
          <h2>Регистрация</h2>
          <RegisterForm />
          <div className="login-form__footer">
            <span>Уже есть аккаунт на AframeHotel?</span>
            <Link href="/auth/SignIn" passHref>
              <Button variant="outlined" size="small">
                Войти
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default SignUp
