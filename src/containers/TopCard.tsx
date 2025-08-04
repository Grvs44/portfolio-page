import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SocialStack from '../components/SocialStack'
import StyledCard from '../components/StyledCard'
import Text from '../components/Text'
import type { TopContent } from '../types'

export type TopCardProps = {
  content: TopContent
}

const TopCard: FC<TopCardProps> = ({ content }) => (
  <StyledCard>
    <Grid container>
      <Grid
        size={{ xs: 12, sm: 4 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          src={content.photo}
          sx={{ height: 150, width: 150 }}
          title="Profile photo"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 'grow' }}>
        <Typography component="h1" variant="h2">
          {content.name}
        </Typography>
        {content.description ? <Text>{content.description}</Text> : null}
        <SocialStack socials={content?.socials} />
      </Grid>
    </Grid>
  </StyledCard>
)

export default TopCard
