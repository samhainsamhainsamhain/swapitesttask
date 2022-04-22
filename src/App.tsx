import { useState, useContext } from "react";

import SearchBox from "./components/searchBox/SearchBox";
import Character from "./components/character/Character";
import SearchResults from "./components/searchResults/SearchResults";
import History from "./components/searchHistory/SearchHistory";
import { People, PeopleSearchResult } from "./swapi/swapiInterfaces";
import { HistoryContext, HistoryProvider } from "./store/swapiProvider";

import "./App.css";

function App() {
  const [showedCharacter, setShowedCharacter] = useState<People | null>(null);
  const [searchResult, setSearchResult] = useState<PeopleSearchResult | null>(
    null
  );
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const historyCtx = useContext(HistoryContext);

  function updateHistory(character: People) {
    const updatedHistory = historyCtx.searchHistory;
    updatedHistory.push(character);
    historyCtx.setSearchHistory(updatedHistory);
  }

  function getSearchResult(queryResult: PeopleSearchResult) {
    setShowedCharacter(null);
    setSearchResult(queryResult);
  }

  function showCharacter(character: People) {
    if (character === showedCharacter) return
    updateHistory(character);
    setShowedCharacter(character);
  }

  return (
    <HistoryProvider>
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
        {showSearchHistory && historyCtx.searchHistory !== null && (
          <History
            searchHistory={historyCtx.searchHistory}
            onHistoryItemClick={showCharacter}
          />
        )}
      </div>
    </HistoryProvider>
  );
}

export default App;
