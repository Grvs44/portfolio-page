import type { FC } from 'react'
import Typography from '@mui/material/Typography'
import SocialStack from '../components/SocialStack'
import StyledCard from '../components/StyledCard'
import type { TopCardProps } from './TopCard'

const BottomCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <Typography>{content.name}</Typography>
    <SocialStack socials={content.socials} />
  </StyledCard>
)

export default BottomCard
