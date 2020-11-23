import React from 'react'
import '../styles/global.scss'
import { AppProps } from 'next/app'
import { AuthProvider } from '../context/Auth'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default App
