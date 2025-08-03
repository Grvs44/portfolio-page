import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import App from './App'
import theme from './theme'

const viewLicenses = async () => {
  const response = await fetch('./licenses.txt')
  document.body.innerText = await response.text()
}

const createApp = async () => {
  createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  )
}

if (location.pathname.includes('licenses.txt')) {
  viewLicenses()
} else {
  createApp()
}
