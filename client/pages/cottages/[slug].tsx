import ImageSlider from '@components/src/components/elements/ImageSlider/ImageSlider'
import Loader from '@components/src/components/elements/Loader/Loader'
import { Paper } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function SinglePageCottage() {
  const router = useRouter()
  const cottageId = router.query.slug

  if (cottageId) {
    return (
      <main>
        <div className="room-page__gallery-wrapper">
          <ImageSlider className="room-page__gallery">
            {images &&
              images.map((img: string, index: string) => (
                <Image
                  key={index}
                  className="room-page__gallery-item--img"
                  src={'http://placehold.it/420x150/'}
                  loading="lazy"
                  fill
                  alt="cottagePhoto"
                  width={0}
                  height={0}
                />
              ))}
          </ImageSlider>
        </div>
        <div className="room-info">
          <div className="room-info__column">
            <div className="room-info__group">
              <RoomInfoCard />
              <RoomReviewsCard countReviews={countReviews} rate={rate} />
            </div>
            <Reviews />
            <div className="room-info__group">
              <RoomRulesCard />
              <RoomCancelCard />
            </div>
          </div>
          <div className="room-info__form">
            <Paper elevation={3} className="form-card booking-form__card">
              <div style={{ display: 'flex' }}>
                <ButtonFavorite
                  status={status}
                  onToggle={() => handleToggleFavorite(roomId)}
                />
              </div>
              <div className="booking-form__header">
                <div className="booking-form__numberRoom">
                  <span className="booking-form__numberRoom-text">
                    № {cottageName}
                  </span>
                </div>
                <div className="booking-form__cost">
                  <span>{price}&#8381;</span> в сутки
                </div>
              </div>
              <BookingForm />
            </Paper>
          </div>
        </div>
      </main>
    )
  }
  return <Loader />
}
