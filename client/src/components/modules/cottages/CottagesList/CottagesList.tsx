import React from 'react'
import CottageCard from '../CottageCard/CottageCard'

interface CottagesList {
  rooms?: []
}

const CottagesList = () => {
  return (
    <div>
      <h1>Список коттеджей</h1>
      <CottageCard />
      <CottageCard />
      <CottageCard />
      <CottageCard />
      <CottageCard />
    </div>
  )
}

export default CottagesList
