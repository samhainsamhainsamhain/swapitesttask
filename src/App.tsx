import { useState, useContext } from "react";

import SearchBox from "./components/searchBox/SearchBox";
import Character from "./components/character/Character";
import SearchResults from "./components/searchResults/SearchResults";
import History from "./components/searchHistory/SearchHistory";
import { People, PeopleSearchResult } from "./swapi/swapiInterfaces";
import { HistoryContext, HistoryProvider } from "./store/swapiProvider";
import Button from "./components/UI/Button";

import classes from "./App.module.css";

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
    if (character === showedCharacter) return;
    updateHistory(character);
    setShowedCharacter(character);
  }

  const searchResultsComponent = (
    <>
      {searchResult === null && <h2>Swapi Character Searcher</h2>}
      {searchResult !== null && showedCharacter === null && (
        <SearchResults
          results={searchResult}
          resultClickHandler={showCharacter}
        />
      )}
    </>
  );

  const showedCharacterComponent = (
    <>
      {showedCharacter !== null && (
        <Character characterProperties={showedCharacter} />
      )}
    </>
  );

  const searchHistoryComponent = (
    <>
      <Button
        action={() => {
          setShowSearchHistory(!showSearchHistory);
        }}
        buttonName={"Show Search History"}
      />
      {showSearchHistory && historyCtx.searchHistory !== null && (
        <History
          searchHistory={historyCtx.searchHistory}
          onHistoryItemClick={showCharacter}
        />
      )}
    </>
  );

  return (
    <HistoryProvider>
      <div className={classes.App}>
        <SearchBox onSearchResultReceived={getSearchResult} />
        {searchResultsComponent}
        {showedCharacterComponent}
        {searchHistoryComponent}
      </div>
    </HistoryProvider>
  );
}

export default App;
