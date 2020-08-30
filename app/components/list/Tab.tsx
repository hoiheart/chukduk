
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
      { key: 'bundes', title: '분데스' },
      { key: 'seriea', title: '세리에' },
      { key: 'gasengi', title: '가생이' },
      { key: 'ppomppu', title: '뽐뿌' }
    ],
    media: [
      { key: 'all', title: '전체' },
      { key: 'epl', title: 'EPL' },
      { key: 'primera', title: 'LaLiga' },
      { key: 'bundesliga', title: 'Bundes' },
      { key: 'seria', title: 'SerieA' },
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
      <Tabs tabs={categories} renderTabBar={props => <Tabs.DefaultTabBar {...props} renderTab={TabLink} page={categories.length} />} />
    </div>
  )
}

export default Tab
