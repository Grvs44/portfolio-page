import type { FC } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import type { IconButtonProps } from '@mui/material/IconButton'
import PromiseButton from './PromiseButton'

const data: ShareData = { url: location.href }

const ShareButton: FC<IconButtonProps> = (props) =>
  navigator.canShare && navigator.canShare(data) ? (
    <PromiseButton
      getPromise={() => navigator.share(data)}
      title="Share URL"
      {...props}
    >
      <ShareIcon />
    </PromiseButton>
  ) : null

export default ShareButton
