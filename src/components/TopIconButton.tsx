import { styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'

// Adapted from https://mui.com/material-ui/react-dialog/#customization
export default styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme.palette.primary.contrastText,
}))
