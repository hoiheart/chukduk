import { AppProps } from 'next/app'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
