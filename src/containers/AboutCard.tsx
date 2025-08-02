import type { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export type AboutCardProps = {
  text: string
}

const AboutCard: FC<AboutCardProps> = (props) => (
  <Card>
    <Typography component="h2" variant="h3">
      About me
    </Typography>
    <Typography sx={{ whiteSpace: 'pre-wrap' }}>{props.text}</Typography>
  </Card>
)

export default AboutCard
