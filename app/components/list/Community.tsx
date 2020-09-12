import { createElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql, useQuery, useMutation } from '@apollo/client'
import { List, Space, Skeleton } from 'antd'
import { CalendarOutlined, EyeOutlined, FolderOutlined } from '@ant-design/icons'
import { getTime } from '../../lib/time'
import { hasViewHistory } from '../../lib/views'
import More from './More'
import Search from './Search'

interface ListItem {
  id: string,
  title: string,
  bbs: string,
  category: string,
  url: string,
  date: string,
  views: number
}

const QUERY = gql`
  query GetCommunityList ($type: String, $title: String, $bbs: String, $lastID: ID) {
    getCommunityList (type: $type, title: $title, bbs: $bbs, lastID: $lastID) {
      result {
        id,
        title,
        bbs,
        category,
        url,
        date,
        views
      },
      isLast
    }
  }
`

const MUTATION = gql`
  mutation ViewCommunity ($id: ID!) {
    viewCommunity (id: $id) {
      id
      views
    }
  }
`

const CommunityList = ({ isMobile }) => {
  const router = useRouter()

  const category = String(router.query.category)
  const type = category.match(/(daily|weekly)/) ? category : ''
  const bbs = (router.query.category && !category.match(/(daily|weekly)/)) ? category : ''

  const { data, loading, fetchMore } = useQuery(
    QUERY,
    {
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
      variables: {
        title: router.query.search || '',
        type,
        bbs,
        lastID: ''
      }
    }
  )

  const [viewCommunity] = useMutation(MUTATION)

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
    listData = data.getCommunityList.result
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  )

  const bbsMap = {
    fmkorea: 'FM코리아',
    soccerline: '싸커라인',
    bundes: '분데스매니아',
    seriea: '세리에매니아',
    gasengi: '가생이',
    ppomppu: '뽐뿌'
  }

  const view = (item) => {
    if (hasViewHistory('community', item.id)) {
      if (isMobile) location.href = item.url
    } else {
      viewCommunity({
        variables: { id: item.id },
        update: () => {
          if (isMobile) location.href = item.url
        }
      })
    }
  }

  return (
    <>
      <div className="list-community">
        <List
          itemLayout="vertical"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText icon={FolderOutlined} text={`${bbsMap[item.bbs]}`} key="bbs" />,
                <IconText icon={EyeOutlined} text={item.views} key="views" />,
                <IconText icon={CalendarOutlined} text={getTime(item.date)} key="date" />
              ]}
            >
              <List.Item.Meta
                title={
                  <Link href={item.url}>
                    <a target={isMobile ? null : '_blank'} onClick={(e) => {
                      if (isMobile) e.preventDefault()
                      view({ id: item.id, url: item.url })
                    }}>
                      {item.title}
                    </a>
                  </Link>}
              />
            </List.Item>
          )}
        />
      </div>
      {
        (listData.length && !data.getCommunityList.isLast)
          ? <More fetchMore={fetchMore} lastID={listData[listData.length - 1].id} query="getCommunityList" />
          : ''
      }
      <Search />
    </>
  )
}

export default CommunityList
