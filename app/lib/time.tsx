import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('ko')
dayjs.extend(relativeTime)

export const getTime = (time) => {
  const now = dayjs()
  const regDate = dayjs(time)
  const isInDay = now.isBefore(regDate.add(1, 'day'))

  return isInDay ? regDate.from(now) : regDate.format('YYYY-MM-DD')
}
