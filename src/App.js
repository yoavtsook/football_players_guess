import logo from './logo.svg';
import './App.css';
import {SingleGuess} from "./SingleGuess";
import {players} from "./data";
import {useState} from "react";
import {ReactSearchAutocomplete} from 'react-search-autocomplete'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const rightPlayer = players[getRandomInt(players.length)];
const playerNames = players.map((player, index) => ({id: index, name: player.שם}));
const MAX_GUESS = 8;

function App() {
  const [guesses, setGuesses] = useState(1);
  const renderAutoComplete = () => {
    return (
      <div style={{width: 400}}>
        <ReactSearchAutocomplete
          items={playerNames}
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          // onSelect={handleOnSelect}
          // onFocus={handleOnFocus}
          // autoFocus
          // formatResult={formatResult}
        />
      </div>
    )
  }
  return (
    <div className="App"
         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <span>{`ניחוש ${guesses} מתוך ${MAX_GUESS}`}</span>
      {renderAutoComplete()}
      <SingleGuess playerName={"איתמר ניצן"} rightPlayerName={"אוראל דגני"}/>
    </div>
  );
}

export default App;
