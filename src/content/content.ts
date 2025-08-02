import type { Content } from '../types'
import content from './content.json'

;(content as Partial<Content>).name = import.meta.env.VITE_NAME
export default content as Content
