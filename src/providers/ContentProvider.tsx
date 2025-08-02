import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { Content } from '../types'

export type ContentProviderProps = {
  children: ReactNode
}

export type ContextType = Content | undefined

const ContentContext = createContext<ContextType>(undefined)

export const useContent: () => ContextType = () => useContext(ContentContext)

const fetchContent: () => Promise<Content> = async () => {
  const response = await fetch(import.meta.env.VITE_CONTENT_URL)
  return await response.json()
}

const ContentProvider: FC<ContentProviderProps> = (props) => {
  const [content, setContent] = useState<ContextType>(undefined)

  useEffect(() => {
    fetchContent().then((content) => setContent(content))
  }, [])

  return (
    <ContentContext.Provider value={content}>
      {props.children}
    </ContentContext.Provider>
  )
}

export default ContentProvider
