import React from 'react'
import { Breadcrumbs, Link as MuiLink } from '@mui/material'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

const CustomBreadcrumbs = () => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter((x) => x)

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`
    const readableSegment = segment.replace(/-/g, ' ')
    const title =
      readableSegment.charAt(0).toUpperCase() + readableSegment.slice(1)

    return { path, title }
  })

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* <NextLink href="/" passHref>
        <Link underline="hover" color="inherit">
          Главная
        </Link>
      </NextLink> */}
      {breadcrumbLinks.map(({ path, title }) => (
        <NextLink key={path} href={path} passHref>
          <MuiLink underline="hover" color="inherit" component="span">
            {title}
          </MuiLink>
        </NextLink>
      ))}
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
