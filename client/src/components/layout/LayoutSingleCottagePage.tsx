import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import { ReactNode } from 'react'
import Container from '../elements/Container/Container'

interface LayoutCottagesListProps {
  children: ReactNode
}

const LayoutSingleCottage = ({ children }: LayoutCottagesListProps) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default LayoutSingleCottage
