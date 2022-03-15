import React from "react";
import {players} from "./data";
export const SingleGuess = ({playerName, rightPlayerName}) => {
  const playerData = players.find((data) => data["שם"] === playerName);
  const rightPlayerData = players.find((data) => data["שם"] === rightPlayerName);

  const renderColumn = (text) => {
    return (<span style={{margin: 5, border: "1px solid black"}}>{text}</span>)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
      <span className={"title"}>{playerName}</span>
      <div style={{display: 'flex', flexDirection: "row", marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        {renderColumn(playerData["שם"])}
        {renderColumn(playerData["גיל"])}
        {renderColumn(playerData["ישראלי/זר"])}
        {renderColumn(playerData["פלייאוף"])}
        {renderColumn(playerData["עמדה"])}
      </div>
    </div>
  )
}