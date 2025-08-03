import type { SocialIconProps } from 'react-social-icons'

export type Social = string | SocialIconProps

export type TopContent = {
  name: string
  photo?: string
  socials?: Social[]
  description?: string
}

export type Project = {
  name: string
  photo?: string
  text: string
}

export type Skill = {
  name: string
  text: string
}

export type Content = TopContent & {
  about: string
  projects?: Project[]
  skills?: Skill[]
}
