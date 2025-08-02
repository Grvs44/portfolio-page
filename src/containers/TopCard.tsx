import type { FC } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import SocialStack from '../components/SocialStack'
import type { TopContent } from '../types'

export type TopCardProps = {
  content: TopContent
}

const TopCard: FC<TopCardProps> = ({ content }) => (
  <Card>
    <Typography component="h1" variant="h2">
      {content.name}
    </Typography>
    <SocialStack socials={content?.socials} />
    {content.description ? (
      <Typography sx={{ whiteSpace: 'pre-wrap' }}>
        {content.description}
      </Typography>
    ) : null}
  </Card>
)

export default TopCard
