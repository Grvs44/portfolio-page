import type { FC } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Link } from '../types'

const ProjectLinkGroup: FC<{ links: Link[] }> = ({ links }) => {
  const size = useMediaQuery((theme) => theme.breakpoints.up('sm'))
  return (
    <ButtonGroup
      aria-label="project links"
      orientation={size ? 'horizontal' : 'vertical'}
      sx={{ alignContent: 'center', display: 'flex' }}
    >
      {links.map((link, index) => (
        <Button key={index} href={link.url} target="_blank">
          {link.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default ProjectLinkGroup
