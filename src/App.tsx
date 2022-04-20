import { useState } from "react";

import SearchBox from "./components/search/SearchBox";
import Character from "./components/character/Character";
import { People, PeopleSearchResult } from "./swapi/swapiInterfaces";

import "./App.css";
import SearchResults from "./components/searchResults/SearchResults";

function App() {
  const [showedCharacter, setShowedCharacter] = useState<People | null>(null);
  const [searchResult, setSearchResult] = useState<PeopleSearchResult | null>(
    null
  );

  function getSearchResult(queryResult: PeopleSearchResult) {
    setShowedCharacter(null);
    setSearchResult(queryResult);
  }

  function showCharacter(character: People) {
    console.log(character);
    setShowedCharacter(character);
  }

  return (
    <div className="App">
      <SearchBox onSearchResultReceived={getSearchResult} />
      {searchResult === null && <h2>Swapi Character Searcher</h2>}
      {searchResult !== null && showedCharacter === null && (
        <SearchResults
          results={searchResult}
          resultClickHandler={showCharacter}
        />
      )}
      <Character />
    </div>
  );
}

export default App;
