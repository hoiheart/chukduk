import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const More = () => {
  return (
    <div className="more">
      <Button block style={{ height: '40px' }}>더 보기 <DownOutlined /></Button>
    </div>
  )
}

export default More
