import Title from '../components/layout/Title'
import Tab from '../components/list/Tab'
import Media from '../components/list/Media'
import More from '../components/list/More'
import Search from '../components/list/Search'

const Index = () => {
  return (
    <>
      <Title text="미디어" />
      <Tab menu="community" />
      <Media />
      <More />
      <Search />
    </>
  )
}

export default Index
