import Link from 'next/link'
import { List, Tag } from 'antd'
import dayjs from 'dayjs'
import world from './mock.world.json'
import korea from './mock.korea.json'

const Schedule = () => {
  const listWorldData = world.scheduleMap
  const listKoreaData = korea.scheduleMap.filter(match => match.key.match(/(K리그1)/))

  const Match = ({ match }) => (
    <a>
      <div className="home">
        <span className="name">{match.homeTeamShortName}</span>
        <span className="score">{match.homeTeamScore}</span>
      </div>
      <div className="info">
        <span className="status"><Tag color="green">{match.statusInfo}</Tag></span>
        <span className="time">{dayjs(match.gameDateTime).format('HH:mm')}</span>
      </div>
      <div className="away">
        <span className="name">{match.awayTeamShortName}</span>
        <span className="score">{match.awayTeamScore}</span>
      </div>
    </a>
  )

  return (
    <div className="list-schedule">
      {listWorldData.map(league => (
        <List
          key={league.categoryId}
          size="small"
          header={<h4>{league.key}</h4>}
          bordered
          dataSource={league.scheduleList}
          renderItem={match => (
            <List.Item>
              <Link href={`http://sports.news.naver.com/sports/new/live/index.nhn?category=worldfootball&gameId=${match.gameId}`}>
                <Match match={match} />
              </Link>
            </List.Item>
          )}
        />
      ))}
      {listKoreaData.map(league => (
        <List
          key={league.categoryId}
          size="small"
          header={<h4>{league.key}</h4>}
          bordered
          dataSource={league.scheduleList}
          renderItem={match => (
            <List.Item>
              <Link href={`http://sports.news.naver.com/gameCenter/textRelayFootball.nhn?category=kleague&gameId=${match.gameId}`}>
                <Match match={match} />
              </Link>
            </List.Item>
          )}
        />
      ))}
    </div>
  )
}

export default Schedule
