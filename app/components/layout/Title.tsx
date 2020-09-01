import { Divider, Typography } from 'antd'

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <Typography.Title level={2}>{ text }</Typography.Title>
      <Divider />
    </>
  )
}

export default Title
