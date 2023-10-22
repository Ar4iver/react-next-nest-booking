import React from 'react'
import Button from '../../elements/Button/Button'
import InputField from '../../elements/Fields/InputField'

// const initialData: UserType = {
//   username: '',
//   email: '',
//   password: '',
// }

const RegisterForm = () => {
  // const { data, errors, handleInputChange, handleKeyDown, validate } = useForm(
  //   initialData,
  //   true,
  //   validatorConfig
  // )

  // const loginError = useSelector(getAuthErrors())
  // const dispatch = useDispatch()

  // const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   if (validate(data)) {
  //     dispatch(signUp(data))
  //   }
  // }

  return (
    <>
      <form
      // errors={errors}
      // handleChange={handleInputChange}
      // handleKeyDown={handleKeyDown}
      >
        <InputField autoFocus name="username" label="Придумайте ваш логин" />
        <InputField name="email" label="Почта" />
        {/* <InputFieldWithPassword
          name="password"
          label="Пароль"
          type="password"
        /> */}
        <InputField autoFocus name="password" label="Придумайте пароль" />
        <InputField
          autoFocus
          name="password"
          label="Повторите введённый пароль"
        />
        <Button
          type="submit"
          // onClick={handleSubmit}
          fullWidth
          // disabled={Object.keys(errors).length !== 0}
        >
          Зарегистрироваться
        </Button>
      </form>
      {/* {loginError && <p className="form__enter-error">{loginError}</p>} */}
    </>
  )
}

export default RegisterForm
