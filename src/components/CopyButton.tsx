import type { FC } from 'react'
import CopyIcon from '@mui/icons-material/ContentCopy'
import type { IconButtonProps } from '@mui/material/IconButton'
import PromiseButton from './PromiseButton'

const CopyButton: FC<IconButtonProps> = (props) =>
  navigator.clipboard ? (
    <PromiseButton
      getPromise={() => navigator.clipboard.writeText(location.href)}
      title="Copy URL"
      {...props}
    >
      <CopyIcon />
    </PromiseButton>
  ) : null

export default CopyButton
