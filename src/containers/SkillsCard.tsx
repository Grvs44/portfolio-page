import type { FC } from 'react'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import type { Skill } from '../types'

const SkillsCard: FC<{ skills?: Skill[] }> = ({ skills }) =>
  skills ? (
    <Card>
      <Typography component="h2" variant="h3">
        Skills
      </Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={skill.name}
              secondary={skill.text}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Card>
  ) : null

export default SkillsCard
