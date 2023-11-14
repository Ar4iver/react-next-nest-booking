export interface RootState {
  user: UserState
}

export interface AuthState {
  isAuth: boolean
  firstName: string | null
  lastName: string | null
  email: string | null
}

export interface UserState {
  firstName: string | null
  lastName: string | null
  email: string | null
  password: string | null
  isAuth: boolean
  loading: boolean
  error: string | null
}

export interface RegisterData {
  firstname: string
  lastname: string
  email: string
  password: string
}

export interface LoginData {
  email: string
  password: string
}

export interface ICottagesList {
  cottages: ICottageProps[]
}

export interface IReviewsProps {
  id: number
  title: string
  content: string
  cottageId: number
  publicationDate: string
}

export interface IBookingProps {
  id: number
  cottageId: number
  startDate: string
  endDate: string
  status: string
}

export interface ImageProps {
  id: number
  url: string
  cottageId: number
}

export interface ICottageProps {
  id: number
  name: string
  description: string
  numberOfBedrooms: number
  rate: number
  maxGuests: number
  price: number
  images: ImageProps[]
  bookings: IBookingProps[]
  reviews: IReviewsProps[]
  comforts: []
}
