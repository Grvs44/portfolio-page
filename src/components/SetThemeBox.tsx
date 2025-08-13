import type { FC } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { useColorScheme } from '@mui/material/styles'

// Adapted from https://mui.com/material-ui/customization/dark-mode/#toggling-color-mode
const SetThemeBox: FC = () => {
  const { mode, setMode } = useColorScheme()
  return mode ? (
    <Box>
      <FormControl>
        <FormLabel>Theme</FormLabel>
        <RadioGroup
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as 'system' | 'light' | 'dark')
          }
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  ) : null
}

export default SetThemeBox
