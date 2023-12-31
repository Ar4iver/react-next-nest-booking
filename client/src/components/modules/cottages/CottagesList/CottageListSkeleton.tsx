import React from 'react'
import CottageCardSkeleton from '../CottageCard/CottageCardSkeleton'

const RoomsListSkeleton = ({ pageSize }: { pageSize: number }) => {
  const roomsSkeletonArray = Array(pageSize).fill('')
  return (
    <ul className="rooms__list">
      {roomsSkeletonArray.map((_, idx) => (
        <li key={idx} className="rooms__list-item">
          <CottageCardSkeleton />
        </li>
      ))}
    </ul>
  )
}

export default RoomsListSkeleton
