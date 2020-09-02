import { createElement } from 'react'
import Link from 'next/link'
import { Card, Divider, Space } from 'antd'
import { CalendarOutlined, EyeOutlined, FolderOutlined } from '@ant-design/icons'

const Media = () => {
  const listData = [
    { _id: '5f1b57548e9b1eb09e647912', no: '688384', category: 'epl', date: { $date: { $numberLong: '1595627348138' } }, thumb: 'https://phinf.pstatic.net/tvcast/20200723_64/BZX48_1595497495432bOPPF_PNG/1595497314836.png&type=sports_nf201_113&noimage=sp5', title: '[인터뷰] 현장 소감 - 로버트슨, 클롭 감독, 옥슬레이드-체임벌린', url: 'https://sports.news.naver.com/wfootball/vod/index.nhn?category=epl&tab=total&listType=total&date=&gameId=&teamCode=&playerId=&keyword=&id=688384&page=1', views: { $numberInt: '0' } },
    { _id: '5f1b57548e9b1eb09e64791d', no: '688290', category: 'epl', date: { $date: { $numberLong: '1595627348223' } }, thumb: 'https://phinf.pstatic.net/tvcast/20200723_167/kp1NC_1595481840285QeTAq_PNG/1595481578764.png&type=sports_nf201_113&noimage=sp5', title: '[인터뷰] 클롭 감독의 트로피 세레모니 소감', url: 'https://sports.news.naver.com/wfootball/vod/index.nhn?category=epl&tab=total&listType=total&date=&gameId=&teamCode=&playerId=&keyword=&id=688290&page=1', views: { $numberInt: '0' } }
  ]

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  )

  return (
    <div className="list-media">
      <ul>
        {listData.map(item => (
          <li key={item._id}>
            <Link href={item.url}>
              <a>
                <Card
                  hoverable
                  cover={<img alt="example" lazy src={item.thumb} />}>
                  <Card.Meta title={item.title} description={[
                    <IconText icon={FolderOutlined} text={item.category} key="category" />,
                    <Divider type="vertical" key="divider" />,
                    <IconText icon={EyeOutlined} text="0" key="views" />,
                    <Divider type="vertical" key="divider" />,
                    <IconText icon={CalendarOutlined} text="2020-09-01" key="date" />
                  ]} />
                </Card>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Media
