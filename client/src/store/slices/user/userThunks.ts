import { LoginData, RegisterData } from '@components/src/types/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const fetchRegister = createAsyncThunk(
  'register/fetchRegister',
  async (data: RegisterData) => {
    const { firstname, lastname, email, password } = data
    const response = await axios.post('http://localhost:3001/users/v1/signup', {
      firstname,
      lastname,
      email,
      password,
    })

    if (response.data.warningMessage) {
      toast.warning('Пользователь с таким Email уже существует.')
      return
    }

    return response.data
  }
)

const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async (data: LoginData) => {
    const { email, password } = data
    const response = await axios.post(
      'http://localhost:3001/users/v1/login',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    )
    toast.success('Вход выполнен!')
    return response.data
  }
)

export { fetchRegister, fetchLogin }
