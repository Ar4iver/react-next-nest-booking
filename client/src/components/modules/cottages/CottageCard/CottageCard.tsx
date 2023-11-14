import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ComputerIcon from '@mui/icons-material/Computer'
import WifiIcon from '@mui/icons-material/Wifi'
import Badge from '@components/src/components/elements/Badge/Badge'
import Divider from '@components/src/components/elements/Divider/Divider'
import ImageSlider from '@components/src/components/elements/ImageSlider/ImageSlider'
import declOfNum from '@components/src/utils/declOfNum'
import { ICottageProps } from '@components/src/types/types'

const CottageCard = ({ ...cottage }: ICottageProps) => {
  const comfortIconsMap: { [x: string]: JSX.Element } = {
    hasWifi: <WifiIcon />,
    hasConditioner: <AcUnitIcon />,
    hasWorkSpace: <ComputerIcon />,
  }
  return (
    <div className="room-card">
      {cottage.comforts && (
        <Badge className="badge">
          {cottage.comforts.map((comfort) => (
            <div key={comfort}>{comfortIconsMap[comfort]}</div>
          ))}
        </Badge>
      )}
      <ImageSlider className="room-card__gallery">
        {cottage.images &&
          cottage.images.map((img, index) => (
            <div className="room-card__gallery-item" key={index}>
              <Image
                className="room-card__gallery-item--img"
                src={img.url}
                alt="cottagePhoto"
                width={100}
                height={150}
              />
            </div>
          ))}
      </ImageSlider>
      <Link href={`/cottages/cottage/${1}`} className="room-card__description">
        <div className="room-card__description-row">
          <h3 className="room-card__title">
            <span className="room-card__title--big">{cottage.name}</span>
          </h3>
          <div className="room-card__rentPerDay">
            <span>{cottage.price}&#8381;</span> в сутки
          </div>
        </div>
        <Divider />
        <div className="room-card__description-row">
          <div className="room-card__rating">
            {/* <Rating
              name="read-only"
              value={rating}
              totalCount={countReviews}
              readOnly
            /> */}
            <p>Тут будет рейтинг</p>
          </div>
          <div className="room-card__reviews">
            <span className="room-card__reviews-count">{`${
              cottage.reviews.length
            } ${declOfNum(cottage.reviews.length, [
              'Отзыв',
              'Отзыва',
              'Отзывов',
            ])}`}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CottageCard
