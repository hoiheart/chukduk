import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from 'antd'

const Search = () => {
  const router = useRouter()
  const [value, setValue] = useState(router.query.search || '')

  const submit = () => {
    router.push({
      query: { search: value }
    })
  }

  return (
    <div className="search">
      <Input.Search
        placeholder="제목"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onSearch={submit}
        enterButton
        style={{ height: '40px' }}
      />
    </div>
  )
}

export default Search
