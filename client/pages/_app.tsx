import '@components/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import '../styles/Home.module.scss'
import store from '@components/src/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  )
}
