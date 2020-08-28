import * as React from 'react'
import Nav from './Nav'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <h1>
        <Link href='/'>
          <a>
            <img src='/logo.png' alt='축덕' />
          </a>
        </Link>
      </h1>
      <Nav />
    </header>
  )
}

export default Header
