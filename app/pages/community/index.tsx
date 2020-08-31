import Title from '../../components/layout/Title'
import Tab from '../../components/list/Tab'
import Community from '../../components/list/Community'
import More from '../../components/list/More'
import Search from '../../components/list/Search'

const Index = () => {
  return (
    <>
      <Title text="축덕" />
      <Tab menu="community" />
      <Community />
      <More />
      <Search />
    </>
  )
}

export default Index
