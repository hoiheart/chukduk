import * as React from 'react'
import Link from 'next/link'
import ForumIcon from '@material-ui/icons/Forum'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import AlarmIcon from '@material-ui/icons/Alarm'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>
              <ForumIcon />
              커뮤니티
            </a>
          </Link>
        </li>
        <li>
          <Link href="/media">
            <a>
              <OndemandVideoIcon />
              미디어
            </a>
          </Link>
        </li>
        <li>
          <Link href="/fixtures">
            <a>
              <AlarmIcon />
              일정
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
