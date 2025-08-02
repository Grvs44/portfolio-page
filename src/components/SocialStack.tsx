import type { FC } from 'react'
import Stack from '@mui/material/Stack'
import { SocialIcon } from 'react-social-icons'
import type { Social } from '../types'

export type SocialStackProps = {
  socials?: Social[]
}

const SocialStack: FC<SocialStackProps> = (props) =>
  props.socials ? (
    <Stack direction="row">
      {props.socials.map((social, index) =>
        typeof social == 'string' ? (
          <SocialIcon key={index} target="_blank" url={social} />
        ) : (
          <SocialIcon key={index} target="_blank" {...social} />
        ),
      )}
    </Stack>
  ) : null

export default SocialStack
