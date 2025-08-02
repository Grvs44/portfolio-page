import { FC } from 'react'
import Stack from '@mui/material/Stack'
import type { Social } from '../types'

export type SocialStackProps = {
  socials: Social[]
}

const SocialStack: FC<SocialStackProps> = (props) => <Stack></Stack>

export default SocialStack
