import { useState } from "react";

import SearchBox from "./components/searchBox/SearchBox";
import Character from "./components/character/Character";
import SearchResults from "./components/searchResults/SearchResults";
import History from "./components/history/History";
import { People, PeopleSearchResult } from "./swapi/swapiInterfaces";

import "./App.css";

function App() {
  const [showedCharacter, setShowedCharacter] = useState<People | null>(null);
  const [searchResult, setSearchResult] = useState<PeopleSearchResult | null>(
    null
  );
  const [searchHistory, setSearchHistory] = useState<People[] | null>([]);
  const [showSearchHistory, setShowSearchHistory] = useState<Boolean>(false);

  function updateHistory(character: People) {
    const updatedHistory = searchHistory;
    updatedHistory?.push(character);
    setSearchHistory(updatedHistory);
  }

  function getSearchResult(queryResult: PeopleSearchResult) {
    setShowedCharacter(null);
    setSearchResult(queryResult);
  }

  function showCharacter(character: People) {
    if (character === showedCharacter) {
      return console.log("Already showed");
    }
    console.log(character);
    updateHistory(character);
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
      {showedCharacter !== null && (
        <Character characterProperties={showedCharacter} />
      )}
      <button
        onClick={() => {
          setShowSearchHistory(!showSearchHistory);
        }}
      >
        Show search history
      </button>
      {showSearchHistory && searchHistory !== null && (
        <History
          searchHistory={searchHistory}
          onHistoryItemClick={showCharacter}
        />
      )}
    </div>
  );
}

export default App;
