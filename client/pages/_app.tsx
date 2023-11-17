import '@components/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { CssBaseline } from '@mui/material'
import '../styles/Home.module.scss'
import store from '@components/src/store/store'
import { type ReactElement, type ReactNode } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { fetchLoginCheck } from '@components/src/store/slices/user/userThunks'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie || ''
  await context.store.dispatch(fetchLoginCheck(cookies))

  // Дополнительная логика, если необходимо

  return { props: {} }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}
