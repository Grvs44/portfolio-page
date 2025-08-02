import type { FC } from 'react'
import Card from '@mui/material/Card'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SocialStack from '../components/SocialStack'
import type { Social } from '../types'

export type TopCardProps = {
  content?: {
    name: string
    socials?: Social[]
  }
}

const TopCard: FC<TopCardProps> = ({ content }) => (
  <Card>
    <Typography component="h1">
      {content ? content.name : <Skeleton />}
    </Typography>
    <SocialStack socials={content?.socials} />
  </Card>
)

export default TopCard
