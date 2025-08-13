import { createContext, useState, FC, ReactNode } from 'react'
import SettingsDialog from '../containers/SettingsDialog'

export type State = {
  settingsOpen: boolean
  setSettingsOpen: (open: boolean) => void
}

export const StateContext = createContext<State>({
  settingsOpen: false,
  setSettingsOpen: () => {},
})

const StateProvider: FC<{ children: ReactNode }> = (props) => {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

  const value: State = {
    settingsOpen,
    setSettingsOpen,
  }

  return (
    <StateContext.Provider value={value}>
      {props.children}
      <SettingsDialog
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </StateContext.Provider>
  )
}

export default StateProvider
