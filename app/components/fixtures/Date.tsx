import Link from 'next/link'
import { Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

const Fixtures = ({ title, prev, next }) => {
  return (
    <div className="date">
      <Link href="/fixtures/[date]" as={`/fixtures/${prev}`}><a><Button shape="circle" icon={<ArrowLeftOutlined />} /></a></Link>
      <h3>{title}</h3>
      <Link href="/fixtures/[date]" as={`/fixtures/${next}`}><a><Button shape="circle" icon={<ArrowRightOutlined />} /></a></Link>
    </div>
  )
}

export default Fixtures
