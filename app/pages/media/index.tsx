import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import Media from '../../components/list/Media'
import More from '../../components/list/More'
import Search from '../../components/list/Search'

const Index = () => {
  return (
    <>
      <Title text="미디어" />
      <Menu page="media" />
      <Media />
      <More />
      <Search />
    </>
  )
}

export default Index
