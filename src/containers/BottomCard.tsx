import type { FC } from 'react'
import { styled } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import SocialStack from '../components/SocialStack'
import StyledCard from '../components/StyledCard'
import type { TopCardProps } from './TopCard'

const RepoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecorationColor: theme.palette.primary.contrastText,
  textAlign: 'center',
}))

const BottomCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <Typography>{content.name}</Typography>
    <SocialStack socials={content.socials} />
    <RepoText>
      Created with{' '}
      <Link
        rel="noopener"
        sx={{ color: 'inherit', textDecorationColor: 'inherit' }}
        target="_blank"
        href="https://github.com/Grvs44/mypage"
      >
        mypage
      </Link>{' '}
      {import.meta.env.VITE_VERSION}
    </RepoText>
  </StyledCard>
)

export default BottomCard
