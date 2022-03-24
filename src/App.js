import './App.css';
import {SingleGuess} from "./SingleGuess";
import {players} from "./data";
import {useState} from "react";
import {ReactSearchAutocomplete} from 'react-search-autocomplete'
import {GuessCategory} from "./GuessCategory";
import {isMobile} from "./utils";

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
    return (<div style={{width: "100%", marginTop: 15}}>
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
    </div>)
  }
  const renderContent = () => {
    return (<div style={{
      marginTop: 15, width: "98%", maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <span>{`ניחוש ${guesses} מתוך ${MAX_GUESS}`}</span>
      {renderAutoComplete()}
      <GuessCategory/>
      <div style={{display: 'flex', flexDirection: 'column', width: "100%", padding: 10}}>
        {guessList.map((id) => <SingleGuess key={id} playerId={id} rightPlayerId={rightPlayer}/>)}
      </div>
    </div>)
  }

  const renderWonState = () => {
    return (<>
      <span>{`כל הכבוד, ניצחת לאחר ${guesses} ניחושים`}</span>
      <span>{`השחקן היומי הוא: ${players[rightPlayer].שם}`}</span>
    </>)
  }

  const renderLoseState = () => {
    return (<>
      <span style={{alignSelf: 'center'}}>{'הפסדת! נגמרו הניחושים, אולי בפעם הבאה...'}</span>
      <span style={{alignSelf: 'center'}}>{`השחקן הנכון הוא ${players[rightPlayer].שם}`}</span>
    </>)
  }

  const renderSiteData = () => {
    if (isMobile()) {
      return (<div className={"site-data-mobile"}>
        <img
          alt="logo"
          src={"https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/186508072_106382681636150_4377790422795253827_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RCclwt_93WsAX9phghw&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT9iSv_PM9rDp3pGD-kcmlfPRYdgdmdYwsKo9DqiHwIa4w&oe=6260872C"}
          style={{width: "10vw", height: "10vw"}}/>
        <a href={"https://www.facebook.com/KeyPassIL"}><h5>KeyPass - מסירת מפתח</h5></a>
      </div>)
    }
    return (<div className={"site-data"}>
      <img
        alt="logo"
        src={"https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/186508072_106382681636150_4377790422795253827_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RCclwt_93WsAX9phghw&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT9iSv_PM9rDp3pGD-kcmlfPRYdgdmdYwsKo9DqiHwIa4w&oe=6260872C"}
        style={{width: "5vw", height: "5vw"}}/>
      <a href={"https://www.facebook.com/KeyPassIL"}><h2>KeyPass - מסירת מפתח</h2></a>
    </div>)
  }

  const renderHeader = () => {
    return (<div className={"header"}>
      <h1 style={{marginTop: isMobile() ? 125 : undefined}}>נחש את השחקן</h1>
    </div>)
  }
  return (<div className="App">
    {renderHeader()}
    {renderSiteData()}
    <div className={"content"}>
      {won ? renderWonState() : (guesses <= MAX_GUESS ? renderContent() : renderLoseState())}
    </div>
  </div>);
}

export default App;
