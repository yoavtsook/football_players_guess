import './App.css';
import {SingleGuess} from "./SingleGuess";
import {players} from "./data";
import {useState} from "react";
import {ReactSearchAutocomplete} from 'react-search-autocomplete'
import {GuessCategory} from "./GuessCategory";

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
      <div style={{width: "100%", marginTop: 15}}>
        <ReactSearchAutocomplete
          items={playerNames}
          onSelect={(data) => {
            if (data.id === rightPlayer) {
              setWon(true);
            } else {
              setGuessList([data.id, ...guessList])
              setGuesses(guesses + 1)
            }
          }}
          autoFocus
        />
      </div>
    )
  }
  const renderContent = () => {
    return (
      <div style={{marginTop: 15, width: "98%", maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <span>{`ניחוש ${guesses} מתוך ${MAX_GUESS}`}</span>
        {renderAutoComplete()}
        <GuessCategory/>
        <div style={{display: 'flex', flexDirection: 'column', width: "100%", padding: 10}}>
          {guessList.map((id) => <SingleGuess key={id} playerId={id} rightPlayerId={rightPlayer}/>)}
        </div>
      </div>
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
      <>
        <span style={{alignSelf: 'center'}}>{'הפסדת! נגמרו הניחושים, אולי בפעם הבאה...'}</span>
        <span style={{alignSelf: 'center'}}>{`השחקן הנכון הוא ${players[rightPlayer].שם}`}</span>
      </>
    )
  }

  const renderHeader = () => {
    return (
      <div className={"header"}>
        <h1>נחש את השחקן</h1>
      </div>
    )
  }
  return (
    <div className="App">
      {renderHeader()}
      <div className={"content"}>
        {won ? renderWonState() : (guesses <= MAX_GUESS ? renderContent() : renderLoseState())}
      </div>
    </div>
  );
}

export default App;
