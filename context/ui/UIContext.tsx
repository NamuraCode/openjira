import { createContext } from "react";

interface contextProps {
    sideMenuOpen: boolean
}

export const Uicontext =  createContext({} as contextProps)

