import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Forum, OndemandVideo, Alarm } from '@material-ui/icons'

const Nav = () => {
  const router = useRouter()

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === '/' ? 'active' : ''}>
              <Forum fontSize="small" />
              커뮤니티
            </a>
          </Link>
        </li>
        <li>
          <Link href="/media">
            <a className={router.pathname === '/media' ? 'active' : ''}>
              <OndemandVideo fontSize="small" />
              미디어
            </a>
          </Link>
        </li>
        <li>
          <Link href="/fixtures">
            <a className={router.pathname === '/fixtures' ? 'active' : ''}>
              <Alarm fontSize="small" />
              일정
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
