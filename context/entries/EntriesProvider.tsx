import { ReactNode, useReducer } from 'react'
import { EntriesContext, entriesReducer } from '.'
import { Entry } from '@/interfaces'

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE : EntriesState = {
    entries: []
} 

export const EntriesProvider = ( children : ReactNode)=>{
    const [ state, dispatch ] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE) 

    return(
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}