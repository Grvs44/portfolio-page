import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CopyButton from '../components/CopyButton'
import SettingsButton from '../components/SettingsButton'
import ShareButton from '../components/ShareButton'
import SocialStack from '../components/SocialStack'
import StyledCard from '../components/StyledCard'
import Text from '../components/Text'
import type { TopContent } from '../types'

export type TopCardProps = {
  content: TopContent
}

const TopCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <SettingsButton />
    <Grid container>
      <Grid
        size={{ xs: 12, sm: 4 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          src={content.photo}
          sx={{ height: 200, width: 200 }}
          title="Profile photo"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 'grow' }}>
        <Typography component="h1" variant="h2">
          {content.name}
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
          {content.pronouns}
        </Typography>
        {content.description ? <Text>{content.description}</Text> : null}
        <Box>
          <ShareButton />
          <CopyButton />
        </Box>
        <SocialStack socials={content?.socials} />
      </Grid>
    </Grid>
  </StyledCard>
)

export default TopCard
