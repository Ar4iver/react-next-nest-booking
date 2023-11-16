import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import { ReactNode } from 'react'
import Container from '../elements/Container/Container'

interface LayoutCottagesListProps {
  children: ReactNode
}

const LayoutCottagesPage = ({ children }: LayoutCottagesListProps) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default LayoutCottagesPage
