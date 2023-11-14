import LayoutCottagesList from '@components/src/components/layout/LayoutCottagesPage'
import CottageListSkeleton from '@components/src/components/modules/cottages/CottagesList/CottageListSkeleton'
import CottagesList from '@components/src/components/modules/cottages/CottagesList/CottagesList'
import React, { ReactElement } from 'react'

const CottagesPage = () => {
  const roomsIsLoading = false

  const cottages = [
    {
      id: 4,
      name: 'White House',
      description: 'описание нового коттеджа 2',
      numberOfBedrooms: 7,
      rate: 3,
      maxGuests: 1,
      price: 6000,
      images: [
        {
          id: 1,
          url: '/public/img/whiteHouse_cottage.jpg',
          cottageId: 4,
        },
      ],
      bookings: [
        {
          id: 1,
          cottageId: 4,
          startDate: '2023-11-12T00:00:00.000Z',
          endDate: '2023-11-15T00:00:00.000Z',
          status: 'pending',
        },
      ],
      reviews: [
        {
          id: 1,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
        {
          id: 2,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
        {
          id: 3,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
      ],

      comforts: ['1', '2', '3'],
    },
    {
      id: 4,
      name: 'Bordo House',
      description: 'описание нового коттеджа 2',
      numberOfBedrooms: 7,
      rate: 3,
      maxGuests: 1,
      price: 6000,
      images: [
        {
          id: 1,
          url: '/public/img/whiteHouse_cottage.jpg',
          cottageId: 4,
        },
      ],
      bookings: [
        {
          id: 1,
          cottageId: 4,
          startDate: '2023-11-12T00:00:00.000Z',
          endDate: '2023-11-15T00:00:00.000Z',
          status: 'pending',
        },
      ],
      reviews: [
        {
          id: 1,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
        {
          id: 2,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
        {
          id: 3,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
      ],

      comforts: ['1', '2', '3'],
    },
    {
      id: 4,
      name: 'Brown House',
      description: 'описание нового коттеджа 2',
      numberOfBedrooms: 7,
      rate: 3,
      maxGuests: 1,
      price: 6000,
      images: [
        {
          id: 1,
          url: '/public/img/whiteHouse_cottage.jpg',
          cottageId: 4,
        },
      ],
      bookings: [
        {
          id: 1,
          cottageId: 4,
          startDate: '2023-11-12T00:00:00.000Z',
          endDate: '2023-11-15T00:00:00.000Z',
          status: 'pending',
        },
      ],
      reviews: [
        {
          id: 1,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
        {
          id: 2,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
        {
          id: 3,
          title: 'Отличный домик',
          content: 'Очень понравился коттедж, отличный сервис и обслуживание!',
          cottageId: 4,
          publicationDate: '2023-11-17T00:00:00.000Z',
        },
      ],

      comforts: ['1', '2', '3'],
    },
  ]

  return (
    <main className="rooms-page">
      <aside className="rooms-page__filters">
        {/* <RoomsFilter onReset={handleResetFilters} /> */}
        <p>Тут будет фильтр CottagesFilter</p>
      </aside>
      <section className="rooms-page__rooms">
        <div className="rooms-page__sorting">
          {/* <Searchbar value={searchTerm} onChange={handleChangeSearch} /> */}
          <p>Тут поиск SearchBar</p>
          <p>Тут сортировка CottagesSort</p>
          {/* <RoomsSort sortBy={sortBy} onSort={handleSort} /> */}
        </div>
        <h2 className="rooms__title">Номера, которые мы для вас подобрали</h2>
        {roomsIsLoading ? (
          <CottageListSkeleton pageSize={12} />
        ) : (
          <CottagesList cottages={cottages} />
        )}
      </section>
    </main>
  )
}

CottagesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutCottagesList>{page}</LayoutCottagesList>
}

export default CottagesPage
