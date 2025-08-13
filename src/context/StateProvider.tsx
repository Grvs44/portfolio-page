import { createContext, FC, ReactNode, useState } from 'react'
import SettingsDialog from '../containers/SettingsDialog'

export type State = {
  settingsOpen: boolean
  setSettingsOpen: (open: boolean) => void
  licenses: string | null
  getLicenses: () => void
}

export const StateContext = createContext<State>({
  settingsOpen: false,
  setSettingsOpen: () => {},
  licenses: null,
  getLicenses: () => {},
})

const fetchLicenses = () =>
  new Promise<string>((resolve, reject) =>
    fetch('./licenses.txt')
      .then(async (response) => {
        resolve(await response.text())
      })
      .catch((reason) => reject('Error: ' + reason)),
  )

const StateProvider: FC<{ children: ReactNode }> = (props) => {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
  const [license, setLicense] = useState<string | null>(null)

  const value: State = {
    settingsOpen,
    setSettingsOpen,
    licenses: license,
    getLicenses: () => fetchLicenses().then(setLicense).catch(alert),
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
