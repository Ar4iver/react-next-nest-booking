import { UserState } from '@components/src/types/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchLogin, fetchRegister } from './userThunks'

const initialState: UserState = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  isAuth: false,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.password = action.payload.password
    },
    removeUser(state) {
      state.firstName = null
      state.lastName = null
      state.email = null
      state.password = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        const response = action.payload
        console.log(response)
        state.firstName = response.firstName
        state.lastName = response.lastName
        state.email = response.email
        state.loading = false
        state.isAuth = true
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchRegister.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const response = action.payload
        console.log(response)
        state.email = response.email
        state.isAuth = true
      })
  },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
