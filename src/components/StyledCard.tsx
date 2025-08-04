import { styled } from '@mui/material'
import Card from '@mui/material/Card'

export default styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
}))
