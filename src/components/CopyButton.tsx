import type { FC } from 'react'
import CopyIcon from '@mui/icons-material/ContentCopy'
import PromiseButton from './PromiseButton'

const CopyButton: FC = () =>
  navigator.clipboard ? (
    <PromiseButton
      getPromise={() => navigator.clipboard.writeText(location.origin)}
      title="Copy URL"
    >
      <CopyIcon />
    </PromiseButton>
  ) : null

export default CopyButton
