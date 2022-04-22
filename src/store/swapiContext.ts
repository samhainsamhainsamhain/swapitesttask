// import React, { createContext, useState } from "react";
// import { People, PeopleSearchResult } from "../swapi/swapiInterfaces";

// const searchHistorie: People[] = [];

// const [searchResult, setSearchResult] = useState<PeopleSearchResult | null>(
//     null
//   );

// interface swapiContextProviderProps {
//     searchResult: People[]
// }

// export const swapiContext = createContext(searchResult);

import { createContext } from "react";
import { People } from "../swapi/swapiInterfaces";

export const historyContext = createContext({
  searchHistory: [],
  updateHistory: (character: People) => {},
});
