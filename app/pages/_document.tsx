import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="ko">
        <Head>
          <title>축덕</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='robots' content='index,follow' />
          <meta name="google-site-verification" content="zYbXj849NBlArZOtNJ7I1vEuFl-F6PRnUdRpqBYs-Ec" />
          <meta name="naver-site-verification" content="2af23c79e0ca38b188a83c4627dbd808e4e9ed20" />
          <meta property='og:title' content='축덕' />
          <meta name="description" content="자주 들르는 축구 커뮤니티 소식! 이제 이리저리 옮겨 다니지 마시고 축덕에서 한 눈에 보세요!" />
          <meta property="og:description" content="자주 들르는 축구 커뮤니티 소식! 이제 이리저리 옮겨 다니지 마시고 축덕에서 한 눈에 보세요!" />
          <meta property="og:image" content="/public/images/sns.png" />
          <meta name="author" content="Chukduk Lab." />
          <meta name="keywords" content="축덕, 축덕닷넷, 축빠, 축톡, FM코리아, 싸줄, 싸커라인, 분데스매니아, 세리에매니아, 가생이, 뽐뿌, 스포츠, 축구, 풋볼,soccer, football" />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  }
}
