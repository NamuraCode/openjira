import { Entry } from '@/interfaces'
import { createContext } from 'react'

interface contextProps {
  entries: Entry[] //tipado
}

export const EntriesContext =  createContext({} as contextProps)