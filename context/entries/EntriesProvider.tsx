import { ReactNode, useReducer } from 'react'
import { EntriesContext, entriesReducer } from '.'

export interface UiState {
    prop: boolean
}

const ENTRIES_INITIAL_STATE : UiState = {
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