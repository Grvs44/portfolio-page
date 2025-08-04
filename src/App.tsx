import type { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import AboutCard from './containers/AboutCard'
import BottomCard from './containers/BottomCard'
import ProjectsPaper from './containers/ProjectsPaper'
import SkillsCard from './containers/SkillsCard'
import TopCard from './containers/TopCard'
import type { Content } from './types'

const App: FC<{ content: Content }> = ({ content }) => (
  <Box>
    <TopCard content={content} />
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid size={{ xs: 12, sm: 8, md: 6 }}>
        <AboutCard text={content.about} />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 6 }}>
        <SkillsCard skills={content.skills} />
      </Grid>
      <Grid size={12}>
        <ProjectsPaper projects={content.projects} />
      </Grid>
    </Grid>
    <BottomCard content={content} />
  </Box>
)

export default App
