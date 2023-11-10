export interface RootState {
  user: UserState
}

export interface AuthState {
  isAuth: boolean
  firstName: string | null
  lastName: string | null
  email: string | null
}

export interface UserState {
  firstName: string | null
  lastName: string | null
  email: string | null
  password: string | null
  isAuth: boolean
  loading: boolean
  error: string | null
}

export interface RegisterData {
  firstname: string
  lastname: string
  email: string
  password: string
}

export interface LoginData {
  email: string
  password: string
}
