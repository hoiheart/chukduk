
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
      { href: '/', title: '전체' },
      { href: '/community/daily', title: 'Daily' },
      { href: '/community/weekly', title: 'Weekly' },
      { href: '/community/fmkorea', title: 'FM코리아' },
      { href: '/community/soccerline', title: '싸커라인' },
      { href: '/community/bundes', title: '분데스' },
      { href: '/community/seriea', title: '세리에' },
      { href: '/community/gasengi', title: '가생이' },
      { href: '/community/ppomppu', title: '뽐뿌' }
    ],
    media: [
      { href: '/media', title: '전체' },
      { href: '/media/epl', title: 'EPL' },
      { href: '/media/primera', title: 'LaLiga' },
      { href: '/media/bundesliga', title: 'Bundes' },
      { href: '/media/seria', title: 'SerieA' },
      { href: '/media/uefa', title: 'UEFA' },
      { href: '/media/epl', title: 'EPL' },
      { href: '/media/etc', title: '기타' }
    ]
  }

  const categories = categoriesMap[menu]

  const TabLink = ({ href, title }) => {
    return (
      <Link href={`${href}`}><a>{title}</a></Link>
    )
  }

  return (
    <div className="tab">
      <Tabs tabs={categories} renderTabBar={props => <Tabs.DefaultTabBar {...props} renderTab={TabLink} page={categories.length} />} />
    </div>
  )
}

export default Tab
