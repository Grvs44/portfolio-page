import { createTheme } from '@mui/material/styles'

const theme: Parameters<typeof createTheme>[0] = {
  colorSchemes: {
    dark: true,
  },
}

const getTheme = (color: string | undefined) => {
  if (color) {
    const palette = { primary: { main: color } }
    theme.palette = palette
    ;(theme.colorSchemes as any).dark = { palette }
  }
  return createTheme(theme)
}

export default getTheme
