import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const More = ({ fetchMore, lastID, query }) => {
  return (
    <div className="more">
      <Button block style={{ height: '40px' }} onClick={() => {
        fetchMore({
          variables: {
            lastID
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev
            return Object.assign({}, prev, {
              [query]: {
                total: fetchMoreResult[query].total,
                result: [...prev[query].result, ...fetchMoreResult[query].result]
              }
            })
          }
        })
      }}>더 보기 <DownOutlined /></Button>
    </div>
  )
}

export default More
