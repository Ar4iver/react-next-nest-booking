import LoginForm from '@components/src/components/modules/forms/LoginForm/LoginForm'
import { Button, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className="login-form__wrapper">
        <Paper elevation={3} className="form-card login-form__card">
          <h2>Авторизация</h2>
          <LoginForm />
          <div className="login-form__footer">
            <span>Впервые тут? Зарегистрируйтесь!</span>
            <Link href="/auth/SignUp" passHref>
              <Button variant="outlined" size="small">
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default SignIn
