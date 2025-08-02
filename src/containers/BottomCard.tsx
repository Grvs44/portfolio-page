import type { FC } from 'react'
import Typography from '@mui/material/Typography'
import { SocialIcon } from 'react-social-icons'
import SocialStack from '../components/SocialStack'
import StyledCard from '../components/StyledCard'
import type { TopCardProps } from './TopCard'

const BottomCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <Typography>{content.name}</Typography>
    <SocialStack socials={content.socials} />
    <Typography>
      Created with mypage {import.meta.env.VITE_VERSION}
      <SocialIcon
        style={{ height: '1.5em', width: '1.5em' }}
        target="_blank"
        url="https://github.com/Grvs44/mypage"
      />
    </Typography>
  </StyledCard>
)

export default BottomCard
