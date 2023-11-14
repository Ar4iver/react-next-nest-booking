import React from 'react'
import CottageCard from '../CottageCard/CottageCard'
import { ICottagesList } from '@components/src/types/types'

const CottagesList = ({ cottages }: ICottagesList) => {
  return (
    <ul className="rooms__list">
      {cottages.map((cottage) => (
        <li key={cottage.id} className="rooms__list-item">
          <CottageCard {...cottage} />
        </li>
      ))}
    </ul>
  )
}

export default CottagesList
