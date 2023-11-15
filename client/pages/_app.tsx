import '@components/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { CssBaseline } from '@mui/material'
import '../styles/Home.module.scss'
import store from '@components/src/store/store'
import { useState, type ReactElement, type ReactNode, useEffect } from 'react'
import type { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    mounted &&
    getLayout(
      <Provider store={store}>
        <CssBaseline />
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    )
  )
}
