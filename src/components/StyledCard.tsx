import { styled } from '@mui/material'
import DisplayCard from './DisplayCard'

export default styled(DisplayCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))
