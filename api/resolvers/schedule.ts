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
      console.log(world)

      const result = []

      const addData = (res) => {
        res.data?.scheduleMap?.filter(v => !v.key.match(/(국내축구기타)/)).map(league => {
          result.push({
            key: league.key,
            categoryId: league.categoryId,
            scheduleList: league.scheduleList.map(match => {
              return {
                awayTeamScore: match.awayTeamScore,
                awayTeamShortName: match.awayTeamShortName,
                categoryId: match.categoryId,
                gameDateTime: match.gameDateTime,
                gameId: match.gameId,
                homeTeamScore: match.homeTeamScore,
                homeTeamShortName: match.homeTeamShortName,
                statusInfo: match.statusInfo,
                teamScheduleUrl: match.teamScheduleUrl,
                upperCategoryId: match.upperCategoryId
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
