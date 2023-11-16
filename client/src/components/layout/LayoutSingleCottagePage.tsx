import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import { ReactNode } from 'react'

interface LayoutCottagesListProps {
  children: ReactNode
}

const LayoutSingleCottage = ({ children }: LayoutCottagesListProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutSingleCottage
