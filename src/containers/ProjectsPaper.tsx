import type { FC } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import type { Project } from '../types'
import ProjectCard from './ProjectCard'

const ProjectsPaper: FC<{ projects?: Project[] }> = ({ projects }) =>
  projects ? (
    <Paper sx={{ padding: 2 }}>
      <Typography component="h2" variant="h3">
        Projects
      </Typography>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Paper>
  ) : null

export default ProjectsPaper
