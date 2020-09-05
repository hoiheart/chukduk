import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import Media from '../../components/list/Media'

const Index = () => {
  return (
    <>
      <Title text="미디어" />
      <Menu page="media" />
      <Media />
    </>
  )
}

export default Index
