import { useRouter } from 'next/router'
import Title from '../../components/layout/Title'
import Date from '../../components/fixtures/Date'
import Schedule from '../../components/fixtures/Schedule'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

const Fixtures = () => {
  const router = useRouter()
  const date = dayjs(router.query.date as string)

  return (
    <>
      <Title text="일정" />
      <Date title={date.format('YYYY년 MM월 DD일 (ddd)')} prev={date.add(-1, 'day').format('YYYYMMDD')} next={date.add(1, 'day').format('YYYYMMDD')} />
      <Schedule date={date.format('YYYYMMDD')} />
    </>
  )
}

export default Fixtures
