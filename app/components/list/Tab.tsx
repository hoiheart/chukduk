
import * as React from 'react'
import { useState } from 'react'
import Link, { LinkProps } from 'next/link'
import { Omit } from '@material-ui/types'
import MaterialTabs from '@material-ui/core/Tabs'
import MaterialTab from '@material-ui/core/Tab'

type Menu = 'community' | 'media'

const CustomTab = React.forwardRef<any, Omit<LinkProps, 'href'>>(
  (props, href: LinkProps.Url) => (
    <Link href={href} {...props} />
  )
)

const Tab = ({ menu }: { menu: Menu }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const categoriesMap = {
    community: [
      { key: 'all', text: '전체' },
      { key: 'daily', text: 'Daily' },
      { key: 'weekly', text: 'Weekly' },
      { key: 'fmkorea', text: 'FM코리아' },
      { key: 'soccerline', text: '싸커라인' },
      { key: 'bundes', text: '분데스매니아' },
      { key: 'seriea', text: '세리에매니아' },
      { key: 'gasengi', text: '가생이' },
      { key: 'ppomppu', text: '뽐뿌' }
    ],
    media: [
      { key: 'all', text: '전체' },
      { key: 'epl', text: 'EPL' },
      { key: 'primera', text: '프리메라리가' },
      { key: 'bundesliga', text: '분데스리가' },
      { key: 'seria', text: '세리에A' },
      { key: 'uefa', text: 'UEFA' },
      { key: 'epl', text: 'EPL' },
      { key: 'etc', text: '기타' }
    ]
  }

  const categories = categoriesMap[menu]

  return (
    <>
      <MaterialTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <MaterialTab component={CustomTab} href="/" label="Item One" />
      </MaterialTabs>
      <div className="tab">
        {categories.map((v) => <Link key={v.key} href={`${menu}/${v.key}`}><a>{v.text}</a></Link>)}
      </div>
    </>
  )
}

export default Tab
