import React from 'react'
import { List, Space, Tag } from 'antd'
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons'
const Community = () => {
  const listData = [
    { _id: { $oid: '5f2325b38e9b1eb09e4f698f' }, bbs: 'fmkorea', no: '3013927324', category: 'fm.best', date: { $date: { $numberLong: '1596138930885' } }, hasImage: true, hasMovie: false, title: '이연복 아드님 엄청 소박하게 사시네 ㅋㅋㅋ', url: 'https://www.fmkorea.com/best/3013927324', views: { $numberInt: '0' } },
    { _id: { $oid: '5f2325b38e9b1eb09e4f699a' }, bbs: 'fmkorea', no: '3013886345', category: 'fm.best', date: { $date: { $numberLong: '1596138931224' } }, hasImage: true, hasMovie: false, title: '잠도 안오고.. 고딩때 얘기 풀어본다', url: 'https://www.fmkorea.com/best/3013886345', views: { $numberInt: '0' } }
  ]

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <List
      itemLayout="vertical"
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={CalendarOutlined} text="2020-09-01" key="date" />,
            <IconText icon={EyeOutlined} text="0" key="views" />
          ]}
        >
          <Tag key={item.category}>{item.category}</Tag>
          <List.Item.Meta
            title={<a href={item.url}>{item.title}</a>}
          />
        </List.Item>
      )}
    />
  )
}

export default Community
