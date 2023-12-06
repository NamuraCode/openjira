import { createContext } from 'react'

interface contextProps {
  entries: [] //tipado
}

export const EntriesContext =  createContext({} as contextProps)