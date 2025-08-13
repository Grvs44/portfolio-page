import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import App from './App'
import StateProvider from './context/StateProvider'
import getTheme from './theme'
import type { Content } from './types'

;(async () => {
  const content: Content = (await import('./content')).default

  createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={getTheme(content.color)} noSsr>
      <CssBaseline />
      <StateProvider>
        <App content={content} />
      </StateProvider>
    </ThemeProvider>,
  )
})()
