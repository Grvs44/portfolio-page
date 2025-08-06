import type { Content } from './types'

const viewLicenses = () =>
  fetch('./licenses.txt')
    .then(async (response) => {
      document.body.innerText = await response.text()
    })
    .catch((reason) => (document.body.innerText = 'Error: ' + reason))

const createApp = async () => {
  const CssBaseline = (await import('@mui/material/CssBaseline')).default
  const { ThemeProvider } = await import('@mui/material/styles')
  const { createRoot } = await import('react-dom/client')
  const App = (await import('./App')).default
  const getTheme = (await import('./theme')).default
  const content: Content = (await import('./content/content')).default

  createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={getTheme(content.color)}>
      <CssBaseline />
      <App content={content} />
    </ThemeProvider>,
  )
}

if (location.pathname.includes('licenses.txt')) {
  viewLicenses()
} else {
  createApp()
}
