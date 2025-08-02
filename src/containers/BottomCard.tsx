import type { FC } from 'react'
import { styled } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import SocialStack from '../components/SocialStack'
import StyledCard from '../components/StyledCard'
import type { TopCardProps } from './TopCard'

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecorationColor: theme.palette.primary.contrastText,
}))

const BottomCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <Typography>{content.name}</Typography>
    <SocialStack socials={content.socials} />
    Created with{' '}
    <StyledLink target="_blank" href="https://github.com/Grvs44/mypage">
      mypage
    </StyledLink>{' '}
    {import.meta.env.VITE_VERSION}
  </StyledCard>
)

export default BottomCard
