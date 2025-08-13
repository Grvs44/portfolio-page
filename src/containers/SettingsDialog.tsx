import type { FC } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import CloseButton from '../components/CloseButton'
import LicenseBox from '../components/LicenseBox'
import SetThemeBox from '../components/SetThemeBox'

export type SettingsDialogProps = {
  open: boolean
  onClose: () => void
}

const SettingsDialog: FC<SettingsDialogProps> = (props) => (
  <Dialog open={props.open} onClose={props.onClose}>
    <DialogTitle>Settings</DialogTitle>
    <CloseButton onClick={props.onClose} />
    <DialogContent>
      <SetThemeBox />
      <Divider />
      <LicenseBox />
    </DialogContent>
    <DialogActions>
      <Button type="button" onClick={props.onClose}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export default SettingsDialog
