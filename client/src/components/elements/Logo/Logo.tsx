import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/" className="logo-link">
        <Image
          src="/img/aframeIcon.jpg"
          alt="Picture of the author"
          width={60}
          height={60}
        />
      </Link>
    </div>
  )
}

export default Logo
