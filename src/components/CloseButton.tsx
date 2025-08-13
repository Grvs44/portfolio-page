import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import TopIconButton from './TopIconButton'

export type CloseButtonProps = {
  onClick: () => void
}

const CloseButton: React.FC<CloseButtonProps> = (props) => (
  <TopIconButton aria-label="close" onClick={props.onClick}>
    <CloseIcon />
  </TopIconButton>
)

export default CloseButton
