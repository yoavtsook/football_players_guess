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
      <div style={{width: 400, marginTop: 15}}>
        <ReactSearchAutocomplete
          items={playerNames}
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          onSelect={(data) => {
            if (data.id === rightPlayer) {
              setWon(true);
            } else {
              setGuessList([data.id, ...guessList])
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
      <div style={{marginTop: 15, width: "100%", maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <span>{`ניחוש ${guesses} מתוך ${MAX_GUESS}`}</span>
        {renderAutoComplete()}
        <GuessCategory/>
        <div style={{display: 'flex', flexDirection: 'column', width: "100%", padding: 10, height: 400}}>
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
        <img
          src={"https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/186508072_106382681636150_4377790422795253827_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j4Egc3XSJXUAX9I6Vsk&tn=cR85U2iRMyxLL_hy&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT9ZNBv0HADAMwwmyvb0k4LgYZNPwJ-UtxhDTgLKv906xQ&oe=62589E2C"}
          alt={"logo"}
          style={{width: "7%", height: "9%", position: "absolute", top: 40, left: 40}}/>
      </div>
    )
  }
  return (
    <div className="App"
         style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: "100vh", width: "100vw"}}>
      {renderHeader()}
      <div className={"content"}>
        {won ? renderWonState() : (guesses <= MAX_GUESS ? renderContent() : renderLoseState())}
      </div>
    </div>
  );
}

export default App;
