import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === '/' ? 'active' : ''}>
              커뮤니티
            </a>
          </Link>
        </li>
        <li>
          <Link href="/media">
            <a className={router.pathname === '/media' ? 'active' : ''}>
              미디어
            </a>
          </Link>
        </li>
        <li>
          <Link href="/fixtures">
            <a className={router.pathname === '/fixtures' ? 'active' : ''}>
              일정
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
