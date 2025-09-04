import { FC, useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import DoneIcon from '@mui/icons-material/Done'
import { styled } from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

enum State {
  Ready,
  Success,
  Fail,
}

export type PromiseButtonProps = IconButtonProps & {
  getPromise: () => Promise<void>
  title: string
}

const Button = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}))

const PromiseButton: FC<PromiseButtonProps> = ({
  getPromise,
  title: initialTitle,
  children,
  ...props
}) => {
  const [state, setState] = useState<State>(State.Ready)
  const [title, setTitle] = useState<string>(initialTitle)

  const reset = () => {
    setState(State.Ready)
    setTitle(initialTitle)
  }

  const share = () => {
    getPromise()
      .then(() => setState(State.Success))
      .catch(() => setState(State.Fail))
  }

  useEffect(() => {
    switch (state) {
      case State.Ready:
        return
      case State.Success:
        setTitle((title) => title + ' successful')
        break
      default:
        setTitle((title) => title + ' unsuccessful')
    }
    setTimeout(reset, 2000)
  }, [state])

  return (
    <Button {...props} aria-label={title} title={title} onClick={share}>
      {state == State.Ready ? (
        children
      ) : state == State.Success ? (
        <DoneIcon />
      ) : (
        <CancelIcon />
      )}
    </Button>
  )
}

export default PromiseButton
