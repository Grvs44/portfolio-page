import { FC, useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { StateContext } from '../context/StateProvider'

const LicenseBox: FC = () => {
  const state = useContext(StateContext)
  return (
    <Box>
      {state.licenses ? (
        <textarea
          readOnly
          value={state.licenses}
          style={{ height: 200, width: '100%', marginTop: '1em' }}
        ></textarea>
      ) : (
        <Button onClick={state.getLicenses}>View licenses</Button>
      )}
    </Box>
  )
}

export default LicenseBox
