import type { SocialIconProps } from 'react-social-icons'

export type Social = string | SocialIconProps

export type TopContent = {
  name: string
  socials?: Social[]
  description?: string
}

export type Content = TopContent
