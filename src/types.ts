export type Social = {
  url: string
  icon: string
}

export type TopContent = {
  name: string
  socials?: Social[]
  description?: string
}

export type Content = TopContent
