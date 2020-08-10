import { AppProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../graphql/apollo'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default App
