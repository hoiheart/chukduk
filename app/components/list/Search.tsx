import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from 'antd'

const Search = () => {
  const router = useRouter()
  const [value, setValue] = useState(router.query.search || '')

  const query = {
    search: value
  }

  const submit = () => {
    if (!value) {
      router.push(router.pathname, router.asPath)
    } else {
      router.push({
        pathname: router.pathname,
        query: { ...query }
      }, {
        pathname: router.asPath,
        query: { ...query }
      })
    }
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
