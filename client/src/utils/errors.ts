import { toast } from 'react-toastify'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const showAuthError = (error: any) => {
  if (error.includes('401')) {
    console.log('ошибка UNAUTHORIZED')
    toast.error('Неверное имя пользователя или пароль')
    return
  }

  if (error.includes('403')) {
    console.log('ошибка FORBIDDEN')
    toast.error('Ошибка доступа')
    return
  }

  toast.error('Во время запроса произошла ошибка.')
}
