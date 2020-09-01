
import { useState } from 'react'
import Link from 'next/link'
import { Menu as AntdMenu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

type Page = 'community' | 'media'

const Menu = ({ page }: { page: Page }) => {
  const [value, setValue] = useState(0)

  // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
  //   setValue(newValue)
  // }

  const menuData = {
    community: [
      { href: '/', title: '전체' },
      { href: '/community/daily', title: 'Daily' },
      { href: '/community/weekly', title: 'Weekly' },
      { href: '/community/fmkorea', title: 'FM코리아' },
      { href: '/community/soccerline', title: '싸커라인' },
      { href: '/community/bundes', title: '분데스매니아' },
      { href: '/community/seriea', title: '세리에매니아' },
      { href: '/community/gasengi', title: '가생이' },
      { href: '/community/ppomppu', title: '뽐뿌' }
    ],
    media: [
      { href: '/media', title: '전체' },
      { href: '/media/epl', title: 'EPL' },
      { href: '/media/primera', title: 'LaLiga' },
      { href: '/media/bundesliga', title: 'Bundesliga' },
      { href: '/media/seria', title: 'SerieA' },
      { href: '/media/uefa', title: 'UEFA' },
      { href: '/media/epl', title: 'EPL' },
      { href: '/media/etc', title: '기타' }
    ]
  }

  const menuList = menuData[page]

  const MenuItems = (
    <AntdMenu>
      {menuList?.map(v => (
        <AntdMenu.Item key={v.title}>
          <Link href={v.href}><a>{v.title}</a></Link>
        </AntdMenu.Item>
      ))}
    </AntdMenu>
  )

  return (
    <div className="menu">
      <Dropdown overlay={MenuItems} trigger={['click']} placement="bottomRight">
        <Button>{menuList?.[value]?.title} <DownOutlined /></Button>
      </Dropdown>
    </div>
  )
}

export default Menu
