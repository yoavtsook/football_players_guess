import logo from './logo.svg';
import './App.css';
import {SingleGuess} from "./SingleGuess";

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <SingleGuess playerName={"איתמר ניצן"} rightPlayerName={"אוראל דגני"}/>
    </div>
  );
}

export default App;
