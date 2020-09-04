
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
      { href: '/community', as: '/', title: '전체' },
      { href: '/community/[category]', as: '/community/daily', title: 'Daily' },
      { href: '/community/[category]', as: '/community/weekly', title: 'Weekly' },
      { href: '/community/[category]', as: '/community/fmkorea', title: 'FM코리아' },
      { href: '/community/[category]', as: '/community/soccerline', title: '싸커라인' },
      { href: '/community/[category]', as: '/community/bundes', title: '분데스매니아' },
      { href: '/community/[category]', as: '/community/seriea', title: '세리에매니아' },
      { href: '/community/[category]', as: '/community/gasengi', title: '가생이' },
      { href: '/community/[category]', as: '/community/ppomppu', title: '뽐뿌' }
    ],
    media: [
      { href: '/media', as: '/media', title: '전체' },
      { href: '/media/[category]', as: '/media/epl', title: 'EPL' },
      { href: '/media/[category]', as: '/media/primera', title: 'LaLiga' },
      { href: '/media/[category]', as: '/media/bundesliga', title: 'Bundesliga' },
      { href: '/media/[category]', as: '/media/seria', title: 'SerieA' },
      { href: '/media/[category]', as: '/media/uefa', title: 'UEFA' },
      { href: '/media/[category]', as: '/media/epl', title: 'EPL' },
      { href: '/media/[category]', as: '/media/etc', title: '기타' }
    ]
  }

  const menuList = menuData[page]

  const MenuItems = (
    <AntdMenu>
      {menuList?.map(v => (
        <AntdMenu.Item key={v.title}>
          <Link href={v.href} as={v.as}><a>{v.title}</a></Link>
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
