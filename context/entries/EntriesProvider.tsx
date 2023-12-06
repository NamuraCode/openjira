import { ReactNode, useReducer } from 'react'
import { EntriesContext, entriesReducer } from '.'

export interface entriesState {
    prop: boolean
}

const ENTRIES_INITIAL_STATE : entriesState = {
    prop: false
} 

export const EntriesProvider = ( children : ReactNode)=>{
    const [ state, dispatch ] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE) 

    return(
        <EntriesContext.Provider value={{
            prop: false
        }}>
            {children}
        </EntriesContext.Provider>
    )
}