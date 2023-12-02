"use client"

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

    const openSideMenu = ()=>{
        dispatch({type: "Ui - Open Sidebar"} )
    }

    const closeSideMenu = ()=>{
        dispatch({type: "Ui - Close Sidebar"} )
    }
    return(
        <UiContext.Provider value={{
            ...state,
            //Methods
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UiContext.Provider>
    )
}