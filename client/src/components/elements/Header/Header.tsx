import React from 'react'
import Container from '../Container/Container'
import Button from '../Button'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { useAppSelector } from '@components/src/hooks/hooks'

const Header = () => {
  const user = useAppSelector((state) => state.user.firstname)
  const isAuth = useAppSelector((state) => state.user.isAuth)

  console.log(user)

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo className="header__logo" />
          {/* <NavList routes={navigationRoutes} className="header-nav" /> */}
          {isAuth ? (
            <>
              <p>Привет, {user}</p>
            </>
          ) : (
            <div className="header-buttons">
              <Link href="/auth/SignIn" className="header-buttons-button">
                <Button size="small" variant="outlined">
                  Войти
                </Button>
              </Link>
              <Link href="/auth/SignUp" className="header-buttons-button">
                <Button size="small">Зарегистрироваться</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header
