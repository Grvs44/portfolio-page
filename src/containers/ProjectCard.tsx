import type { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DisplayCard from '../components/DisplayCard'
import Text from '../components/Text'
import type { Project } from '../types'

const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <DisplayCard sx={{ margin: 2 }}>
    <Grid container spacing={2}>
      {project.photo ? (
        <Grid
          size={{ xs: 12, sm: 3, md: 2 }}
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
      <Grid size={{ xs: 12, sm: 'grow' }}>
        <Typography component="h3" variant="h4">
          {project.name}
        </Typography>
        <Text>{project.text}</Text>
        {project.links ? (
          <ButtonGroup aria-label="project links">
            {project.links.map((link, index) => (
              <Button key={index} href={link.url} target="_blank">
                {link.text}
              </Button>
            ))}
          </ButtonGroup>
        ) : null}
      </Grid>
    </Grid>
  </DisplayCard>
)

export default ProjectCard
