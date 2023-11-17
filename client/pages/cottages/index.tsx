import LayoutCottagesPage from '@components/src/components/layout/LayoutCottagesPage'
import CottageListSkeleton from '@components/src/components/modules/cottages/CottagesList/CottageListSkeleton'
import CottagesList from '@components/src/components/modules/cottages/CottagesList/CottagesList'
import { cottages } from '@components/src/mockData/cottage'
import { Container } from '@mui/material'
import React from 'react'

const CottagesPage = () => {
  const roomsIsLoading = false

  return (
    <LayoutCottagesPage>
      <main className="rooms-page">
        <aside className="rooms-page__filters">
          {/* <RoomsFilter onReset={handleResetFilters} /> */}
          <p>Тут будет фильтр CottagesFilter</p>
        </aside>
        <Container maxWidth="lg">
          <section className="rooms-page__rooms">
            <div className="rooms-page__sorting">
              {/* <Searchbar value={searchTerm} onChange={handleChangeSearch} /> */}
              {/* <RoomsSort sortBy={sortBy} onSort={handleSort} /> */}
            </div>
            <h2 className="rooms__title">
              Коттеджи, которые мы для вас подобрали
            </h2>
            {roomsIsLoading ? (
              <CottageListSkeleton pageSize={12} />
            ) : (
              <CottagesList cottages={cottages} />
            )}
          </section>
        </Container>
      </main>
    </LayoutCottagesPage>
  )
}

export default CottagesPage
