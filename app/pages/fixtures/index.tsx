import Head from 'next/head'
import { useRouter } from 'next/router'
import detectMobile from 'is-mobile'
import Title from '../../components/layout/Title'
import Date from '../../components/fixtures/Date'
import Schedule from '../../components/fixtures/Schedule'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

const Fixtures = ({ isMobile }) => {
  const router = useRouter()
  const date = router.query.date ? dayjs(router.query.date as string) : dayjs()

  return (
    <>
      <Head>
        <title>일정 | 축덕</title>
        <meta property="og:title" content="일정 | 축덕" key="og:title" />
      </Head>
      <Title text="일정" />
      <Date title={date.format('YYYY년 MM월 DD일 (ddd)')} prev={date.add(-1, 'day').format('YYYYMMDD')} next={date.add(1, 'day').format('YYYYMMDD')} />
      <Schedule date={date.format('YYYYMMDD')} isMobile={isMobile} />
    </>
  )
}

Fixtures.getInitialProps = ({ req }) => {
  const isMobile: boolean = detectMobile({ ua: req, tablet: true })
  return { isMobile }
}

export default Fixtures
