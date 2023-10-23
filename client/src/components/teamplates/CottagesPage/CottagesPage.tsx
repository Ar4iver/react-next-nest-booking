import React from 'react'
import RoomsList from '../../ui/rooms/RoomsList'
import RoomsListSkeleton from '../../ui/rooms/RoomsList/RoomsListSkeleton'
import CottagesList from '../../modules/cottages/CottagesList/CottagesList'
const CottagesPage = () => {
  return (
    <main className="rooms-page">
      <aside className="rooms-page__filters">
        {/* <RoomsFilter onReset={handleResetFilters} /> */}
        <h3>Тут будет фильтр</h3>
      </aside>
      <section className="rooms-page__rooms">
        <div className="rooms-page__sorting">
          <h1>Тут будет поиск и сортировка</h1>
          {/* <Searchbar value={searchTerm} onChange={handleChangeSearch} /> */}
          {/* <RoomsSort sortBy={sortBy} onSort={handleSort} /> */}
          {/* <RoomsDisplayCount
            count={pageSize}
            setCount={handleChangePageSize}
            options={setPageSizeOptions}
          /> */}
        </div>
        <h2 className="rooms__title">Номера, которые мы для вас подобрали</h2>
        {roomsIsLoading ? (
          <RoomsListSkeleton pageSize={pageSize} />
        ) : (
          <CottagesList cottages={cottagesListCrop} />
        )}
        {roomsListCrop.length === 0 && (
          <h2>
            Мы не нашли для вас подходящих коттеджей по вашим параметрам
            &#128577;
          </h2>
        )}

        {sortedItems.length > pageSize && (
          <div className="rooms-page__pagination">
            <h1>Тут будет пагинация</h1>
            {/* <Pagination
              items={sortedItems}
              pageSize={pageSize}
              currentPage={currentPage}
              onChange={handleChangePage}
            /> */}
            {/* <p className="rooms-page__pagination-info">
              {`${(currentPage - 1) * pageSize || 1} - 
              ${
                pageSize * currentPage > rooms.length
                  ? rooms.length
                  : pageSize * currentPage
              }
              из ${rooms.length} вариантов аренды`}
            </p> */}
          </div>
        )}
      </section>
    </main>
  )
}

export default CottagesPage
