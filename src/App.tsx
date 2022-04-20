import { useState } from "react";

import SearchBox from "./components/search/SearchBox";
import Character from "./components/character/Character";
import { PeopleSearchResult } from "./swapi/swapiInterfaces";

import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState<PeopleSearchResult | null>(
    null
  );

  function getSearchResult(queryResult: PeopleSearchResult) {
    setSearchResult(queryResult);
  }

  return (
    <div className="App">
      <SearchBox onSearchResultReceived={getSearchResult} />
      <Character />
    </div>
  );
}

export default App;
