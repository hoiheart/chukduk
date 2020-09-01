import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <Link href='/about'><a>축덕이란?</a></Link>
      <p className="copyright">
        Copyright 2020. Chukduk Lab. all right reserved.
      </p>
    </footer>
  )
}

export default Footer
