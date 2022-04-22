import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { People } from "../swapi/swapiInterfaces";

interface IHistoryContext {
  searchHistory: People[];
  setSearchHistory: Dispatch<SetStateAction<People[]>>;
}

const defaultHistory: People[] = [];

export const HistoryContext = createContext<IHistoryContext>({
  searchHistory: defaultHistory,
  setSearchHistory: () => {},
});

type historyProviderProps = {
  children: React.ReactNode;
};

export function HistoryProvider({
  children,
}: historyProviderProps): JSX.Element {
  const [searchHistory, setSearchHistory] = useState<People[]>(defaultHistory);

  return (
    <HistoryContext.Provider value={{ searchHistory, setSearchHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}