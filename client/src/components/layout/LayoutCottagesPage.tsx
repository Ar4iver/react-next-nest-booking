import { Container } from '@mui/material'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import { ReactNode } from 'react'

interface LayoutCottagesListProps {
  children: ReactNode
}

const LayoutCottagesList = ({ children }: LayoutCottagesListProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default LayoutCottagesList
