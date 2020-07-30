import * as React from 'react'
import Link from 'next/link'

const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <nav>
        <Link href='/about'>축덕이란?</Link>
      </nav>
      <p className="copyright">
        Copyright 2020. Chukduk Lab. all right reserved.
      </p>
    </footer>
  )
}

export default Footer
