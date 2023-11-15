export const cottages = [
  {
    id: 1,
    name: 'White House',
    description: 'описание нового коттеджа 2',
    numberOfBedrooms: 7,
    rate: 3,
    maxGuests: 1,
    price: 6000,
    images: [
      {
        id: 1,
        url: '/img/whiteHouse_cottage.jpg',
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
    id: 2,
    name: 'Bordo House',
    description: 'описание нового коттеджа 2',
    numberOfBedrooms: 7,
    rate: 3,
    maxGuests: 1,
    price: 6000,
    images: [
      {
        id: 1,
        url: '/img/bordo_house.jpg',
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
    id: 3,
    name: 'Brown House',
    description: 'описание нового коттеджа 2',
    numberOfBedrooms: 7,
    rate: 3,
    maxGuests: 1,
    price: 6000,
    images: [
      {
        id: 1,
        url: '/img/brown_house.jpg',
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
    name: 'Black Vintage Residence',
    description:
      // eslint-disable-next-line max-len
      'Этот очаровательный коттедж Black Vintage Residence предлагает уникальный опыт отдыха с 8 спальнями и комфортом на любой вкус.',
    numberOfBedrooms: 8,
    rate: 4,
    maxGuests: 3,
    price: 6042,
    images: [
      { id: 1, url: '', cottageId: 1 },
      { id: 2, url: '', cottageId: 1 },
    ],
    bookings: [],
    reviews: [
      {
        id: 1,
        title: 'Отзыв 1',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Коттедж Black Vintage Residence превзошел все мои ожидания с его 8 спальнями и уютной атмосферой.',
        cottageId: 1,
        publicationDate: '2023-10-28T22:41:14',
      },
      {
        id: 2,
        title: 'Отзыв 2',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Коттедж Black Vintage Residence превзошел все мои ожидания с его 8 спальнями и уютной атмосферой.',
        cottageId: 1,
        publicationDate: '2023-05-24T20:21:31',
      },
      {
        id: 3,
        title: 'Отзыв 3',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Коттедж Black Vintage Residence превзошел все мои ожидания с его 8 спальнями и уютной атмосферой.',
        cottageId: 1,
        publicationDate: '2023-04-12T23:59:10',
      },
    ],
    comforts: ['0'],
  },
  {
    id: 5,
    name: 'Silver Cozy Manor',
    description:
      'Этот уютный особняк Silver Cozy Manor приглашает вас на незабываемый отдых в окружении природы и комфорта.',
    numberOfBedrooms: 6,
    rate: 4.5,
    maxGuests: 4,
    price: 5320,
    images: [
      { id: 1, url: '', cottageId: 2 },
      { id: 2, url: '', cottageId: 2 },
      { id: 3, url: '', cottageId: 2 },
    ],
    bookings: [],
    reviews: [
      {
        id: 4,
        title: 'Отзыв 4',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Silver Cozy Manor создал уютную атмосферу и идеально подходит для семейного отдыха.',
        cottageId: 2,
        publicationDate: '2023-09-15T18:30:22',
      },
    ],
    comforts: ['0'],
  },
  {
    id: 6,
    name: 'Black Vintage Residence',
    description:
      // eslint-disable-next-line max-len
      'Этот очаровательный коттедж Black Vintage Residence предлагает уникальный опыт отдыха с 8 спальнями и комфортом на любой вкус.',
    numberOfBedrooms: 8,
    rate: 4,
    maxGuests: 3,
    price: 6042,
    images: [
      { id: 1, url: '', cottageId: 1 },
      { id: 2, url: '', cottageId: 1 },
    ],
    bookings: [],
    reviews: [
      {
        id: 1,
        title: 'Отзыв 1',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Коттедж Black Vintage Residence превзошел все мои ожидания с его 8 спальнями и уютной атмосферой.',
        cottageId: 1,
        publicationDate: '2023-10-28T22:41:14',
      },
      {
        id: 2,
        title: 'Отзыв 2',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Коттедж Black Vintage Residence превзошел все мои ожидания с его 8 спальнями и уютной атмосферой.',
        cottageId: 1,
        publicationDate: '2023-05-24T20:21:31',
      },
      {
        id: 3,
        title: 'Отзыв 3',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Коттедж Black Vintage Residence превзошел все мои ожидания с его 8 спальнями и уютной атмосферой.',
        cottageId: 1,
        publicationDate: '2023-04-12T23:59:10',
      },
    ],
    comforts: ['0'],
  },
  {
    id: 7,
    name: 'Silver Cozy Manor',
    description:
      'Этот уютный особняк Silver Cozy Manor приглашает вас на незабываемый отдых в окружении природы и комфорта.',
    numberOfBedrooms: 6,
    rate: 4.5,
    maxGuests: 4,
    price: 5320,
    images: [
      { id: 1, url: '', cottageId: 2 },
      { id: 2, url: '', cottageId: 2 },
      { id: 3, url: '', cottageId: 2 },
    ],
    bookings: [],
    reviews: [
      {
        id: 4,
        title: 'Отзыв 4',
        content:
          // eslint-disable-next-line max-len
          'Прекрасное место для отдыха! Silver Cozy Manor создал уютную атмосферу и идеально подходит для семейного отдыха.',
        cottageId: 2,
        publicationDate: '2023-09-15T18:30:22',
      },
    ],
    comforts: ['0'],
  },
  {
    id: 8,
    name: 'Golden Charming Sanctuary',
    description:
      'Этот волшебный коттедж Golden Charming Sanctuary приглашает вас на незабываемый отдых среди природы и роскоши.',
    numberOfBedrooms: 7,
    rate: 4.8,
    maxGuests: 5,
    price: 7200,
    images: [
      { id: 1, url: '', cottageId: 3 },
      { id: 2, url: '', cottageId: 3 },
      { id: 3, url: '', cottageId: 3 },
    ],
    bookings: [],
    reviews: [
      {
        id: 5,
        title: 'Отзыв 5',
        content:
          // eslint-disable-next-line max-len
          'Золотой уголок рая! Golden Charming Sanctuary - это идеальное место для романтического отдыха. Роскошь и красота в каждой детали.',
        cottageId: 3,
        publicationDate: '2023-07-19T14:12:45',
      },
    ],
    comforts: ['1', '2'],
  },
  {
    id: 9,
    name: 'Grey Modern Bungalow',
    description:
      // eslint-disable-next-line max-len
      'Современный бунгало Grey Modern Bungalow предоставляет вам комфортное проживание и возможность насладиться природой.',
    numberOfBedrooms: 5,
    rate: 4.3,
    maxGuests: 3,
    price: 4600,
    images: [
      { id: 1, url: '', cottageId: 4 },
      { id: 2, url: '', cottageId: 4 },
      { id: 3, url: '', cottageId: 4 },
    ],
    bookings: [],
    reviews: [
      {
        id: 6,
        title: 'Отзыв 6',
        content:
          // eslint-disable-next-line max-len
          'Отличное место для отдыха с друзьями! Grey Modern Bungalow имеет современный дизайн и удобства, которые нужны для отличного отпуска.',
        cottageId: 4,
        publicationDate: '2023-06-05T10:55:17',
      },
    ],
    comforts: ['1', '3'],
  },
  {
    id: 10,
    name: 'Grey Serene Sanctuary',
    description:
      'Уединенное убежище Grey Serene Sanctuary погрузит вас в атмосферу спокойствия и релаксации в окружении природы.',
    numberOfBedrooms: 4,
    rate: 4.6,
    maxGuests: 2,
    price: 3800,
    images: [
      { id: 1, url: '', cottageId: 5 },
      { id: 2, url: '', cottageId: 5 },
      { id: 3, url: '', cottageId: 5 },
    ],
    bookings: [],
    reviews: [
      {
        id: 7,
        title: 'Отзыв 7',
        content:
          // eslint-disable-next-line max-len
          'Потрясающее убежище! Grey Serene Sanctuary - это идеальное место для отдыха от городской суеты. Тишина и природа вокруг вас.',
        cottageId: 5,
        publicationDate: '2023-08-10T16:40:55',
      },
    ],
    comforts: ['2', '3'],
  },
]
