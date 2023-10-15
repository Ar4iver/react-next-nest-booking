import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  password: '',
  email: '',
  user: null,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpSuccess(state, action) {
      state.user = action.payload
      state.error = null
    },
    signUpError(state, action) {
      state.error = action.payload
    },
  },
})

export const { signUpSuccess, signUpError } = authSlice.actions
export default authSlice.reducer
