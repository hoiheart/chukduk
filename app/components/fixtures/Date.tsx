import { Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

const Fixtures = () => {
  return (
    <div className="date">
      <Button shape="circle" icon={<ArrowLeftOutlined />} />
      <h3>2020년 9월 3일 (목)</h3>
      <Button shape="circle" icon={<ArrowRightOutlined />} />
    </div>
  )
}

export default Fixtures
