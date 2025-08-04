import type { FC } from 'react'
import Typography from '@mui/material/Typography'
import DisplayCard from '../components/DisplayCard'
import Text from '../components/Text'

export type AboutCardProps = {
  text: string
}

const AboutCard: FC<AboutCardProps> = (props) => (
  <DisplayCard>
    <Typography component="h2" variant="h3">
      About me
    </Typography>
    <Text>{props.text}</Text>
  </DisplayCard>
)

export default AboutCard
