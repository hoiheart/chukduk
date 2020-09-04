import { useState } from 'react'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const More = ({ fetchMore, lastID, query }) => {
  const [loading, setLoading] = useState(false)

  return (
    <div className="more">
      <Button block loading={loading} style={{ height: '40px' }} onClick={() => {
        setLoading(true)

        fetchMore({
          variables: {
            lastID
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            setLoading(false)

            if (!fetchMoreResult) return previousResult

            return {
              ...previousResult,
              [query]: {
                ...previousResult[query],
                isLast: fetchMoreResult[query].isLast,
                result: [...previousResult[query].result, ...fetchMoreResult[query].result]
              }
            }
          }
        })
      }}>더 보기 <DownOutlined /></Button>
    </div>
  )
}

export default More
