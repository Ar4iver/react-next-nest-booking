import LayoutCottagesList from '@components/src/components/layout/LayoutCottagesPage'
import CottageListSkeleton from '@components/src/components/modules/cottages/CottagesList/CottageListSkeleton'
import CottagesList from '@components/src/components/modules/cottages/CottagesList/CottagesList'
import React, { ReactElement } from 'react'

const CottagesPage = () => {
  const roomsIsLoading = true
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
          <CottagesList />
        )}
      </section>
    </main>
  )
}

CottagesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutCottagesList>{page}</LayoutCottagesList>
}

export default CottagesPage
