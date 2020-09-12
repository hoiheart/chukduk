import detectMobile from 'is-mobile'
import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import CommunityList from '../../components/list/Community'

const Community = ({ isMobile }) => {
  return (
    <>
      <Title text="커뮤니티" />
      <Menu page="community" />
      <CommunityList isMobile={isMobile} />
    </>
  )
}

Community.getInitialProps = ({ req }) => {
  const isMobile: boolean = detectMobile({ ua: req, tablet: true })
  return { isMobile }
}

export default Community
