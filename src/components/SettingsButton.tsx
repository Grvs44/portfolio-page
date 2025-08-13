import { FC, useContext } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import { StateContext } from '../context/StateProvider'
import TopIconButton from './TopIconButton'

const SettingsButton: FC = () => {
  const state = useContext(StateContext)
  return (
    <TopIconButton
      aria-label="settings"
      onClick={() => state.setSettingsOpen(true)}
      title="Settings"
    >
      <SettingsIcon />
    </TopIconButton>
  )
}

export default SettingsButton
