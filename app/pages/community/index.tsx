import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import Community from '../../components/list/Community'
import More from '../../components/list/More'
import Search from '../../components/list/Search'

const Index = () => {
  return (
    <>
      <Title text="커뮤니티" />
      <Menu page="community" />
      <Community />
      <More />
      <Search />
    </>
  )
}

export default Index
