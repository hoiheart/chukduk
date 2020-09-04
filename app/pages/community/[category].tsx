import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import Community from '../../components/list/Community'

const Index = () => {
  return (
    <>
      <Title text="커뮤니티" />
      <Menu page="community" />
      <Community />
    </>
  )
}

export default Index
