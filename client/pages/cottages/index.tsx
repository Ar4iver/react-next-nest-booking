import LayoutCottagesList from '@components/src/components/layout/LayoutCottagesPage'
import React, { ReactElement } from 'react'

const CottagesPage = () => {
  return (
    <>
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
        {/* {roomsIsLoading ? (
    <RoomsListSkeleton pageSize={pageSize} />
  ) : (
    <RoomsList rooms={roomsListCrop} />
  )} */}
      </section>
    </>
  )
}

CottagesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutCottagesList>{page}</LayoutCottagesList>
}

export default React.memo(CottagesPage)
