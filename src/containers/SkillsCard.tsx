import type { FC } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DisplayCard from '../components/DisplayCard'

const SkillsCard: FC<{ skills?: string[] }> = ({ skills }) =>
  skills ? (
    <DisplayCard>
      <Typography component="h2" variant="h3">
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid key={index} size="auto">
            <Typography>{skill}</Typography>
          </Grid>
        ))}
      </Grid>
    </DisplayCard>
  ) : null

export default SkillsCard
