import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ForumIcon from '@material-ui/icons/Forum'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import AlarmIcon from '@material-ui/icons/Alarm'

const Nav = () => {
  const router = useRouter()

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === '/' ? 'active' : ''}>
              <ForumIcon fontSize="small" />
              커뮤니티
            </a>
          </Link>
        </li>
        <li>
          <Link href="/media">
            <a className={router.pathname === '/media' ? 'active' : ''}>
              <OndemandVideoIcon fontSize="small" />
              미디어
            </a>
          </Link>
        </li>
        <li>
          <Link href="/fixtures">
            <a className={router.pathname === '/fixtures' ? 'active' : ''}>
              <AlarmIcon fontSize="small" />
              일정
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
