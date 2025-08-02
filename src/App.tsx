import type { FC } from 'react'
import Container from '@mui/material/Container'
import TopCard from './containers/TopCard'
import content from './content/content'

const App: FC = () => (
  <Container>
    <TopCard content={content} />
  </Container>
)

export default App
