import { createContext } from "react";

interface contextProps {
  sideMenuOpen: boolean;
}

export const UiContext = createContext({} as contextProps);
