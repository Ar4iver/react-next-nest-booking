import { LoginData, RegisterData } from '@components/src/types/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

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
    return response.data
  }
)

const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async (data: LoginData) => {
    const { email, password } = data
    const response = await axios.post('http://localhost:3001/users/v1/login', {
      email,
      password,
    })
    return response.data
  }
)

export { fetchRegister, fetchLogin }
