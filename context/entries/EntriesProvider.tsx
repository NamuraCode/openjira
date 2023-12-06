import { ReactNode, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from ".";

interface EntriesProviderProps {
    children: ReactNode
}

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "proident dolor duis elit sunt qui dolor laborum veniam ea laborus qui consequat",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "proident dolor duis elit sunt qui dolor laborum veniam ea laborus qui consequat",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Que sueño tan stenta hp",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
