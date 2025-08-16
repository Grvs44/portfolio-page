import type { FC } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import PromiseButton from './PromiseButton'

const data: ShareData = { url: location.origin }

const ShareButton: FC = () =>
  navigator.canShare && navigator.canShare(data) ? (
    <PromiseButton getPromise={() => navigator.share(data)} title="Share URL">
      <ShareIcon />
    </PromiseButton>
  ) : null

export default ShareButton
