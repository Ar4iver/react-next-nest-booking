import { UserState } from '@components/src/types/types'
import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit'
import { fetchLogin, fetchRegister } from './userThunks'

const initialState: UserState = {
  userId: null,
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
      state.userId = action.payload.userId
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.email = action.payload.email
      state.password = action.payload.password
      state.isAuth = action.payload.isAuth
    },
    removeUser(state) {
      state.userId = null
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
        state.loading = false
        if (action.payload && !action.payload.error) {
          state.userId = action.payload.user.userId
          state.firstname = action.payload.user.firstname
          state.lastname = action.payload.user.lastname
          state.email = action.payload.user.email
          state.isAuth = true
        }
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
        state.userId = action.payload.user.userId
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
