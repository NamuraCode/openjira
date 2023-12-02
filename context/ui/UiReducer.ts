import { UiState } from "./";

type UiActionType =
  | { type: "Ui - Open Sidebar" }
  | { type: "Ui - Close Sidebar" };

export const UiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "Ui - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "Ui - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    default:
      return state;
  }
};
