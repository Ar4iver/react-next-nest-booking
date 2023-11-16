import { UserState } from '@components/src/types/types'
import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit'
import { fetchLogin, fetchRegister } from './userThunks'

const initialState: UserState = {
  firstname: null,
  lastname: null,
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
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.email = action.payload.email
      state.password = action.payload.password
      state.isAuth = action.payload.isAuth
    },
    removeUser(state) {
      state.firstname = null
      state.lastname = null
      state.email = null
      state.password = null
      state.isAuth = false
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
        state.firstname = response.firstname
        state.lastname = response.lastname
        state.email = response.email
        state.loading = false
        state.isAuth = true
      })
      .addCase(
        fetchRegister.rejected,
        (
          state,
          action: PayloadAction<unknown, string, unknown, SerializedError> //????
        ) => {
          state.loading = false
          state.error = action.error.message ?? null
        }
      )
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true
        state.isAuth = false
        state.error = null
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const response = action.payload
        console.log(response)
        state.email = action.payload.user.email
        state.firstname = action.payload.user.firstname
        state.lastname = action.payload.user.lastname
        state.isAuth = true
        state.loading = false
      })
      .addCase(
        fetchLogin.rejected,
        (
          state,
          action: PayloadAction<unknown, string, unknown, SerializedError> ///????
        ) => {
          state.loading = false
          state.error = action.error.message ?? null
        }
      )
  },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
