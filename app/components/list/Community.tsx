import { createElement, useState } from 'react'
import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'
import { List, Space } from 'antd'
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
      id,
      title,
      bbs,
      category,
      url,
      date,
      views
    }
  }
`

const Community = () => {
  const [title, setTitle] = useState('')
  const [lastID, setLastID] = useState('')

  const { loading, error, data, fetchMore } = useQuery(
    QUERY,
    {
      variables: {
        title: '',
        type: '',
        bbs: '',
        lastID: ''
      }
    }
  )

  if (loading) {
    return (
      <div className="loading">loading</div>
    )
  }

  if (error) {
    return (
      <div className="error">error</div>
    )
  }

  const listData: Array<ListItem> = data.getCommunityList

  if (listData.length) {
    // setLastID(listData[listData.length - 1].id)
    // setLastID(listData[listData.length - 1].id)
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
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText icon={FolderOutlined} text={`${item.bbs}${item.category ? ` - ${item.category}` : ''}`} key="bbs" />,
                <IconText icon={EyeOutlined} text="0" key="views" />,
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
      <More />
      <Search />
    </>
  )
}

export default Community
