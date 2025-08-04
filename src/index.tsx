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
  const theme = (await import('./theme')).default

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
