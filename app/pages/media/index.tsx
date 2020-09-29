import Head from 'next/head'
import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import MediaList from '../../components/list/Media'

const Media = () => {
  return (
    <>
      <Head>
        <title>미디어 | 축덕</title>
        <meta key="og:title" property="og:title" content="미디어 | 축덕" />
      </Head>
      <Title text="미디어" />
      <Menu page="media" />
      <MediaList />
    </>
  )
}

export default Media
