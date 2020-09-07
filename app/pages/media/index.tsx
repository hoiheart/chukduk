import Title from '../../components/layout/Title'
import Menu from '../../components/list/Menu'
import MediaList from '../../components/list/Media'

const Media = () => {
  return (
    <>
      <Title text="미디어" />
      <Menu page="media" />
      <MediaList />
    </>
  )
}

export default Media
