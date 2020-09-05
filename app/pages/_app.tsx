import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import 'antd/dist/antd.css'
import '../scss/app.scss'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>축덕</title>
        <meta charSet='utf-8' />
        <link rel="shortcut Icon" href="/favicon.ico" type="image/x-icon" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='index, follow' />
        <meta name="google-site-verification" content="zYbXj849NBlArZOtNJ7I1vEuFl-F6PRnUdRpqBYs-Ec" />
        <meta name="naver-site-verification" content="2af23c79e0ca38b188a83c4627dbd808e4e9ed20" />
        <meta property='og:title' content='축덕' />
        <meta name="description" content="자주 들르는 축구 커뮤니티 소식! 이제 이리저리 옮겨 다니지 마시고 축덕에서 한 눈에 보세요!" />
        <meta property="og:description" content="자주 들르는 축구 커뮤니티 소식! 이제 이리저리 옮겨 다니지 마시고 축덕에서 한 눈에 보세요!" />
        <meta property="og:image" content="/sns.png" />
        <meta name="author" content="Chukduk Lab." />
        <meta name="keywords" content="축덕, 축덕닷넷, FM코리아, 싸줄, 싸커라인, 분데스매니아, 세리에매니아, 가생이, 뽐뿌, 스포츠, 축구, 풋볼, soccer, football" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ApolloProvider>
  )
}

export default App
