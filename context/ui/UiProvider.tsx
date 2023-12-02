import { ReactNode, useReducer } from 'react'
import { UiContext, UiReducer } from './'

export interface UiState {
    sideMenuOpen: boolean
}

interface UiProviderProps {
    children: ReactNode
}

const UI_INITIAL_STATE : UiState = {
    sideMenuOpen: false
} 

export const UiProvider = ( {children} : UiProviderProps)=>{
    const [ state, dispatch ] = useReducer(UiReducer, UI_INITIAL_STATE) 
    
    return(
        <UiContext.Provider value={{
            sideMenuOpen: false
        }}>
            {children}
        </UiContext.Provider>
    )
}