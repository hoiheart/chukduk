import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import { List, Tag, Skeleton, Empty } from 'antd'
import dayjs from 'dayjs'

interface League {
  key: string
  categoryId: string
  scheduleList: {
    gameId: string
    homeTeamShortName: string
    homeTeamScore: number
    statusInfo: string
    gameDateTime: string
    awayTeamShortName: string
    awayTeamScore: number
  }[]
}

const QUERY = gql`
  query GetScheduleList ($date: String) {
    getScheduleList (date: $date) {
      result {
        key,
        categoryId,
        scheduleList {
          homeTeamShortName,
          homeTeamScore,
          statusInfo,
          gameDateTime,
          awayTeamShortName,
          awayTeamScore
        }
      }
    }
  }
`

const Schedule = ({ date }) => {
  const { data, loading } = useQuery(
    QUERY,
    {
      variables: {
        date
      }
    }
  )

  if (loading) {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </>
    )
  }

  let listData: Array<League> = []

  if (data) {
    listData = data.getScheduleList.result
  }

  const color = (info) => {
    if (info === '경기중') return 'red'
    if (info === '경기전') return 'green'
    return 'blue'
  }

  const Match = ({ match }) => (
    <>
      <div className="home">
        <span className="name">{match.homeTeamShortName}</span>
        <span className="score">{match.homeTeamScore}</span>
      </div>
      <div className="info">
        <span className="status"><Tag color={color(match.statusInfo)}>{match.statusInfo}</Tag></span>
        <span className="time">{dayjs(match.gameDateTime).format('HH:mm')}</span>
      </div>
      <div className="away">
        <span className="name">{match.awayTeamShortName}</span>
        <span className="score">{match.awayTeamScore}</span>
      </div>
    </>
  )

  return (
    <div className="list-schedule">
      {listData.length
        ? listData.map((league: League) => (
          <List
            key={league.categoryId}
            size="small"
            header={<h4>{league.key}</h4>}
            bordered
            dataSource={league.scheduleList}
            renderItem={match => (
              <List.Item>
                <Link href={`http://sports.news.naver.com/sports/new/live/index.nhn?category=worldfootball&gameId=${match.gameId}`}>
                  <a>
                    <Match match={match} />
                  </a>
                </Link>
              </List.Item>
            )}
          />
        ))
        : (
          <div className="empty">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )
      }
    </div>
  )
}

export default Schedule
