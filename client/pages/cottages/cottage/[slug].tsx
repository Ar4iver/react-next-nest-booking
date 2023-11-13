import { useRouter } from 'next/router'

export default function SinglePageCottage() {
  const router = useRouter()

  return <p>Cottage: {router.query.slug}</p>
}
