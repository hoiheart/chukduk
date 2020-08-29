
import * as React from 'react'
// import { useState } from 'react'
import Link from 'next/link'
import { Tabs } from 'antd-mobile'

type Menu = 'community' | 'media'

const Tab = ({ menu }: { menu: Menu }) => {
  // const [value, setValue] = useState(0)

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setValue(newValue)
  // }

  const categoriesMap = {
    community: [
      { key: 'all', title: '전체' },
      { key: 'daily', title: 'Daily' },
      { key: 'weekly', title: 'Weekly' },
      { key: 'fmkorea', title: 'FM코리아' },
      { key: 'soccerline', title: '싸커라인' },
      { key: 'bundes', title: '분데스매니아' },
      { key: 'seriea', title: '세리에매니아' },
      { key: 'gasengi', title: '가생이' },
      { key: 'ppomppu', title: '뽐뿌' }
    ],
    media: [
      { key: 'all', title: '전체' },
      { key: 'epl', title: 'EPL' },
      { key: 'primera', title: '프리메라리가' },
      { key: 'bundesliga', title: '분데스리가' },
      { key: 'seria', title: '세리에A' },
      { key: 'uefa', title: 'UEFA' },
      { key: 'epl', title: 'EPL' },
      { key: 'etc', title: '기타' }
    ]
  }

  const categories = categoriesMap[menu]

  const TabLink = ({ key, title }) => {
    return (
      <Link href={`${menu}/${key}`}><a>{title}</a></Link>
    )
  }

  return (
    <div className="tab">
      <Tabs tabs={categories} renderTabBar={props => <Tabs.DefaultTabBar {...props} renderTab={TabLink} page={3} />} />
    </div>
  )
}

export default Tab
