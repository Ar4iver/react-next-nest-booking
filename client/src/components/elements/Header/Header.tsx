import React from 'react'
import Container from '../Container/Container'
import Button from '../Button'
import Logo from '../Logo/Logo'
import Link from 'next/link'

const Header = () => {
  const isLoggedIn = false
  const authErrors = true

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo className="header__logo" />
          {/* <NavList routes={navigationRoutes} className="header-nav" /> */}
          {isLoggedIn && !authErrors ? (
            <>
              <p>Зареган</p>
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
