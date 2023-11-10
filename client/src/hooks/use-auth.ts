import { useSelector } from 'react-redux'
import { AuthState, RootState } from '../types/types'

export function useAuth(): AuthState {
  const { firstName, lastName, email, isAuth } = useSelector(
    (state: RootState) => state.user
  )

  return {
    isAuth,
    firstName,
    lastName,
    email,
  }
}
