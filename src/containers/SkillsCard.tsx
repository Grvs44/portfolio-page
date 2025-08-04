import type { FC } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DisplayCard from '../components/DisplayCard'
import type { Skill } from '../types'

const SkillsCard: FC<{ skills?: Skill[] }> = ({ skills }) =>
  skills ? (
    <DisplayCard>
      <Typography component="h2" variant="h3">
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid key={index} size="auto">
            <Typography>{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </DisplayCard>
  ) : null

export default SkillsCard
