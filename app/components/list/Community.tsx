import { createElement, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import { List, Space, Skeleton } from 'antd'
import { CalendarOutlined, EyeOutlined, FolderOutlined } from '@ant-design/icons'
import { getTime } from '../../lib/time'
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
      size,
      result {
        id,
        title,
        bbs,
        category,
        url,
        date,
        views
      }
    }
  }
`

const Community = () => {
  const router = useRouter()

  const category = String(router.query.category)
  const type = category.match(/(daily|weekly)/) ? category : ''
  const bbs = (router.query.category && !category.match(/(daily|weekly)/)) ? category : ''
  let isLastPage = false
  isLastPage = false

  const { loading, data, fetchMore } = useQuery(
    QUERY,
    {
      variables: {
        title: '',
        type,
        bbs,
        lastID: ''
      },
      fetchPolicy: 'cache-and-network'
    }
  )

  if (loading) {
    return (
      <>
        <Skeleton active />
      </>
    )
  }

  let listData: Array<ListItem> = []

  if (data.getCommunityList?.result) {
    listData = data.getCommunityList.result
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  )

  return (
    <>
      <div className="list-community">
        <List
          itemLayout="vertical"
          dataSource={listData || []}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText icon={FolderOutlined} text={`${item.bbs}${item.category ? ` - ${item.category}` : ''}`} key="bbs" />,
                <IconText icon={EyeOutlined} text={item.views} key="views" />,
                <IconText icon={CalendarOutlined} text={getTime(item.date)} key="date" />
              ]}
            >
              <List.Item.Meta
                title={<Link href={item.url}><a>{item.title}</a></Link>}
              />
            </List.Item>
          )}
        />
      </div>
      {
        (listData.length && !isLastPage)
          ? <More fetchMore={fetchMore} lastID={listData[listData.length - 1].id} query="getCommunityList" />
          : ''
      }

      <Search />
    </>
  )
}

export default Community
