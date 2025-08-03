import type { FC } from 'react'
import Container from '@mui/material/Container'
import AboutCard from './containers/AboutCard'
import BottomCard from './containers/BottomCard'
import ProjectsPaper from './containers/ProjectsPaper'
import SkillsCard from './containers/SkillsCard'
import TopCard from './containers/TopCard'
import content from './content/content'

const App: FC = () => (
  <Container>
    <TopCard content={content} />
    <AboutCard text={content.about} />
    <ProjectsPaper projects={content.projects} />
    <SkillsCard skills={content.skills} />
    <BottomCard content={content} />
  </Container>
)

export default App
