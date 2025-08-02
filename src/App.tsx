import type { FC } from 'react'
import Container from '@mui/material/Container'
import { useContent } from './providers/ContentProvider'
import TopCard from './containers/TopCard'

const App: FC = () => {
  const content = useContent()

  return <>
    <Container><TopCard content={content}/></Container>
  </>
}

export default App
