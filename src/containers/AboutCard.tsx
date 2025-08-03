import type { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Text from '../components/Text'

export type AboutCardProps = {
  text: string
}

const AboutCard: FC<AboutCardProps> = (props) => (
  <Card>
    <Typography component="h2" variant="h3">
      About me
    </Typography>
    <Text>{props.text}</Text>
  </Card>
)

export default AboutCard
