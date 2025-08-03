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

const InheritLink = styled(Link)({
  color: 'inherit',
  textDecorationColor: 'inherit',
})

const BottomCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <Typography>{content.name}</Typography>
    <SocialStack socials={content.socials} />
    <RepoText>
      Created with{' '}
      <InheritLink
        rel="noopener"
        target="_blank"
        href="https://github.com/Grvs44/mypage"
      >
        mypage
      </InheritLink>
      {' v'}
      {import.meta.env.VITE_VERSION} (
      <InheritLink target="_blank" href="./licenses.txt">
        view licenses
      </InheritLink>
      )
    </RepoText>
  </StyledCard>
)

export default BottomCard
