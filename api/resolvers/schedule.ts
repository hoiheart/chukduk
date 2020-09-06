import axios from 'axios'
import dayjs from 'dayjs'

interface ScheduleArgs {
  category: 'world' | 'korea'
  date: string
}

export const query = {
  async getScheduleList (parent, { category, date }: ScheduleArgs) {
    const query = dayjs(date).format('YYYYMMDD')

    try {
      const api = category === 'world' ? process.env.SCHEDULE_WORLD : category === 'korea' ? process.env.SCHEDULE_KOREA : ''
      const res: any = await axios.get(`${api}${query}`)

      const result = []
      res.data?.scheduleMap?.map(league => {
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

      return {
        result
      }
    } catch (e) {
      console.log(e)
      return e
    }
  }
}
