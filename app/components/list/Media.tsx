import { createElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useQuery, useMutation } from '@apollo/client'
import { Card, Divider, Space, Skeleton } from 'antd'
import { CalendarOutlined, EyeOutlined, FolderOutlined } from '@ant-design/icons'
import { getTime } from '../../lib/time'
import { hasViewHistory } from '../../lib/views'
import More from './More'
import Search from './Search'

interface ListItem {
  id: string,
  title: string,
  category: string,
  url: string,
  thumb: string,
  date: string,
  views: number
}

const QUERY = gql`
  query GetMediaList ($title: String, $category: String, $lastID: ID) {
    getMediaList (title: $title, category: $category, lastID: $lastID) {
      result {
        id,
        title,
        category,
        url,
        thumb,
        date,
        views
      },
      isLast
    }
  }
`

const MUTATION = gql`
  mutation ViewMedia ($id: ID!) {
    viewMedia (id: $id) {
      id
      views
    }
  }
`

const MediaList = () => {
  const router = useRouter()

  const category = router.query.category || ''

  const { data, loading, fetchMore } = useQuery(
    QUERY,
    {
      fetchPolicy: 'network-only',
      variables: {
        title: router.query.search || '',
        category,
        lastID: ''
      }
    }
  )

  const [viewMedia] = useMutation(MUTATION)

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

  let listData: Array<ListItem> = []

  if (data) {
    listData = data.getMediaList.result
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  )

  const categoryMap = {
    epl: 'EPL',
    primera: 'LaLiga',
    bundes: 'Bundesliga',
    seriea: 'SerieA',
    chaps: '챔피언스리그',
    europa: '유로파리그',
    facup: 'FA컵',
    kleague: 'K리그',
    amatch: 'A매치'
  }

  return (
    <>
      <div className="list-media">
        <ul>
          {listData.map(item => (
            <li key={item.id}>
              <Link href={item.url}>
                <a target="_blank" onClick={() => {
                  !hasViewHistory('media', item.id) && viewMedia({ variables: { id: item.id } })
                }}>
                  <Card
                    hoverable
                    cover={<img alt="example" loading="lazy" src={item.thumb} />}>
                    <Card.Meta title={item.title} description={[
                      <IconText icon={FolderOutlined} text={categoryMap[item.category]} key="category" />,
                      <Divider type="vertical" key="divider1" />,
                      <IconText icon={EyeOutlined} text={item.views} key="views" />,
                      <Divider type="vertical" key="divider2" />,
                      <IconText icon={CalendarOutlined} text={getTime(item.date)} key="date" />
                    ]} />
                  </Card>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {
        (listData.length && !data.getMediaList.isLast)
          ? <More fetchMore={fetchMore} lastID={listData[listData.length - 1].id} query="getMediaList" />
          : ''
      }
      <Search />
    </>
  )
}

export default MediaList
