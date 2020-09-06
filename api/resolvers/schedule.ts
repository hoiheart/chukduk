import axios from 'axios'
import dayjs from 'dayjs'

interface ScheduleArgs {
  date: string
}

export const query = {
  async getScheduleList (parent, { date }: ScheduleArgs) {
    const query = dayjs(date).format('YYYYMMDD')

    try {
      const world: any = await axios.get(`${process.env.SCHEDULE_WORLD}${query}`)
      const korea: any = await axios.get(`${process.env.SCHEDULE_KOREA}${query}`)

      const result = []

      const addData = (res) => {
        res.data?.scheduleMap?.filter(v => !v.key.match(/(국내축구기타)/)).map(league => {
          result.push({
            key: league.key,
            categoryId: league.categoryId,
            scheduleList: league.scheduleList.map(match => {
              return {
                homeTeamShortName: match.homeTeamShortName,
                homeTeamScore: match.homeTeamScore,
                statusInfo: match.statusInfo,
                gameDateTime: match.gameDateTime,
                awayTeamShortName: match.awayTeamShortName,
                awayTeamScore: match.awayTeamScore
              }
            })
          })
        })
      }

      addData(world)
      addData(korea)

      return {
        result
      }
    } catch (e) {
      console.log(e)
      return e
    }
  }
}
