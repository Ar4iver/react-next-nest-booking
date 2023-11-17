import { useRouter } from 'next/router'
import React from 'react'

const UsersProfile = () => {
  const router = useRouter()
  console.log(router)
  return <div>Профиль пользователя: {router.query.slug}</div>
}

export default UsersProfile
