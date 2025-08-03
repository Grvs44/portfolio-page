import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Text from '../components/Text'
import type { Project } from '../types'

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <Card>
    <Grid container>
      {project.photo ? (
        <Grid
          size={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            src={project.photo}
            sx={{ height: 100, width: 100 }}
            title={project.name}
          />
        </Grid>
      ) : null}
      <Grid size="grow">
        <Typography component="h3" variant="h4">
          {project.name}
        </Typography>
        <Text>{project.text}</Text>
      </Grid>
    </Grid>
  </Card>
)

export default ProjectCard
