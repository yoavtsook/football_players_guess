import './App.css';
import {SingleGuess} from "./SingleGuess";
import {players} from "./data";
import {useState} from "react";
import {ReactSearchAutocomplete} from 'react-search-autocomplete'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const rightPlayer = getRandomInt(players.length);
const playerNames = players.map((player, index) => ({id: index, name: player.שם}));
const MAX_GUESS = 8;

function App() {
  const [guesses, setGuesses] = useState(1);
  const [guessList, setGuessList] = useState([]);
  const [won, setWon] = useState(false);
  const renderAutoComplete = () => {
    return (
      <div style={{width: 400}}>
        <ReactSearchAutocomplete
          items={playerNames}
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          onSelect={(data) => {
            if (data.id === rightPlayer){
              setWon(true);
            }
            else {
              setGuessList([...guessList, data.id])
              setGuesses(guesses + 1)
            }
          }}
          // onFocus={handleOnFocus}
          autoFocus
          // formatResult={formatResult}
        />
      </div>
    )
  }
  const renderContent = () => {
    return (
      <>
        <span>{`ניחוש ${guesses} מתוך ${MAX_GUESS}`}</span>
        {renderAutoComplete()}
        {guessList.map((id) => <SingleGuess key={id} playerId={id} rightPlayerId={rightPlayer}/>)}
      </>
    )
  }

  const renderWonState = () => {
    return (
      <>
        <span>{`כל הכבוד, ניצחת לאחר ${guesses} ניחושים`}</span>
        <span>{`השחקן היומי הוא: ${players[rightPlayer].שם}`}</span>
      </>
    )
  }

  const renderLoseState = () => {
    return (
        <span style={{alignSelf: 'center'}}>{'הפסדת! נגמרו הניחושים, אולי בפעם הבאה...'}</span>
    )
  }
  return (
    <div className="App"
         style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {won ? renderWonState() : (guesses < MAX_GUESS ? renderContent() : renderLoseState())}
    </div>
  );
}

export default App;
