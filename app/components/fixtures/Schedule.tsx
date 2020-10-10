import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import { List, Tag, Skeleton, Empty } from 'antd'
import dayjs from 'dayjs'

interface League {
  key: string
  categoryId: string
  scheduleList: {
    awayTeamScore: number
    awayTeamShortName: string
    categoryId: string
    defaultGameCenterUrl: string
    gameDateTime: string
    gameId: string
    homeTeamScore: number
    homeTeamShortName: string
    statusInfo: string
    upperCategoryId: string
  }[]
}

const QUERY = gql`
  query GetScheduleList ($date: String) {
    getScheduleList (date: $date) {
      result {
        key,
        categoryId,
        scheduleList {
          awayTeamScore,
          awayTeamShortName,
          defaultGameCenterUrl,
          categoryId,
          gameDateTime,
          gameId,
          homeTeamScore,
          homeTeamShortName,
          statusInfo,
          upperCategoryId
        }
      }
    }
  }
`

const Schedule = ({ date, isMobile }) => {
  const { data, loading } = useQuery(
    QUERY,
    {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
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
    if (info === '경기전') return 'green'
    else if (info === '경기종료') return 'blue'
    else return 'red'
  }

  const Match = ({ match }) => (
    <>
      <div className="home">
        <span className="name">{match.homeTeamShortName}</span>
        <span className="score">{match.homeTeamScore}</span>
      </div>
      <div className="info">
        <span className="status"><Tag color={color(match.statusInfo.replace('시작전', '경기전'))}>{match.statusInfo.replace('시작전', '경기전')}</Tag></span>
        <span className="time">{dayjs(match.gameDateTime).format('HH:mm')}</span>
      </div>
      <div className="away">
        <span className="name">{match.awayTeamShortName}</span>
        <span className="score">{match.awayTeamScore}</span>
      </div>
    </>
  )

  const getLink = (match) => {
    if (match.upperCategoryId === 'wfootball') {
      if (isMobile) {
        return `https://m.sports.naver.com${match.defaultGameCenterUrl}gameId=${match.gameId}`
      } else {
        return `https://sports.news.naver.com/sports/new/live/index.nhn?category=worldfootball&gameId=${match.gameId}`
      }
    } else if (match.upperCategoryId === 'kfootball') {
      if (isMobile) {
        return `https://m.sports.naver.com${match.defaultGameCenterUrl}gameId=${match.gameId}`
      } else {
        return `http://sports.news.naver.com/gameCenter/textRelayFootball.nhn?category=${match.categoryId}&gameId=${match.gameId}`
      }
    }

    return ''
  }

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
                <Link href={getLink(match)}>
                  <a target="_blank">
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
