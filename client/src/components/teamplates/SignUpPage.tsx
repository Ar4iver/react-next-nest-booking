import React from 'react'
import RegisterForm from '../modules/forms/RegisterForm/RegisterForm'
import { Button, Paper } from '@mui/material'

const SignUpPage: React.FC = () => {
  return (
    <>
      <div className="login-form__wrapper">
        <Paper elevation={3} className="form-card login-form__card">
          <h2>Регистрация</h2>
          <RegisterForm />
          <div className="login-form__footer">
            <span>Уже есть аккаунт на AframeHotel?</span>
            <Button variant="outlined" size="small">
              Войти
            </Button>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default SignUpPage
