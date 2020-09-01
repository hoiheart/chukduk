import { Input } from 'antd'

const Search = () => {
  const submit = (value) => {
    console.log(value)
  }

  return (
    <div className="search">
      <Input.Search
        placeholder="제목"
        onSearch={submit}
        enterButton
        style={{ height: '40px' }}
      />
    </div>
  )
}

export default Search
