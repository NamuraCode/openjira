"use client"

import { createContext } from "react";

interface contextProps {
  sideMenuOpen: boolean;
  //Methods
  openSideMenu: () => void,
  closeSideMenu: () => void,
}

export const UiContext = createContext({} as contextProps);
