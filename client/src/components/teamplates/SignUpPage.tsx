import React from 'react'
import RegisterForm from '../modules/LoginForm/RegisterForm'
import { Button, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const SignUpPage: React.FC = () => {
  return (
    <>
      <h1 className="visually-hidden">Коттеджи AframeHotel Регистрация</h1>
      <div className="login-form__wrapper">
        <Paper elevation={3} className="form-card login-form__card">
          <h2>Регистрация</h2>
          <RegisterForm />
          <div className="login-form__footer">
            <span>Уже есть аккаунт на AframeHotel?</span>
            <Link to="./signIn" className="login-form__link">
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

export default SignUpPage
