import { createContext } from 'react'

interface contextProps {
  prop: boolean
}

export const EntriesContext =  createContext({} as contextProps)