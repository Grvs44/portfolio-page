import type { SocialIconProps } from 'react-social-icons'

export type Social = string | SocialIconProps

export type TopContent = {
  name: string
  pronouns?: string
  photo?: string
  socials?: Social[]
  description?: string
}

export type Project = {
  name: string
  alt?: string
  photo?: string
  text: string
  links?: Link[]
}

export type Link = {
  text: string
  url: string
}

export type Content = TopContent & {
  color?: string
  about: string
  projects?: Project[]
  skills?: string[]
}
