import type { FC } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DisplayCard from '../components/DisplayCard'
import ProjectLinkGroup from '../components/ProjectLinkGroup'
import Text from '../components/Text'
import type { Project } from '../types'

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <DisplayCard sx={{ margin: 2 }}>
    <Grid container spacing={2}>
      {project.photo ? (
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={project.photo}
            style={{ borderRadius: 8, maxHeight: '100%', maxWidth: '100%' }}
            title={project.name}
          />
        </Grid>
      ) : null}
      <Grid size={{ xs: 12, sm: 'grow' }}>
        <Typography component="h3" variant="h4">
          {project.name}
        </Typography>
        <Text>{project.text}</Text>
        {project.links ? <ProjectLinkGroup links={project.links} /> : null}
      </Grid>
    </Grid>
  </DisplayCard>
)

export default ProjectCard
