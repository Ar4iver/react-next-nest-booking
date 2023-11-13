import '@components/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { CssBaseline } from '@mui/material'
import '../styles/Home.module.scss'
import store from '@components/src/store/store'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

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
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  )
}
