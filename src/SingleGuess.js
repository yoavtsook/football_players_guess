import React from "react";
import {players} from "./data";

export const SingleGuess = ({playerId, rightPlayerId}) => {
  const playerData = players[playerId];
  const rightPlayerData = players[rightPlayerId];

  const renderColumn = (text, color, arrow) => {
    return (
      <div style={{margin: 5, border: "1px solid black", backgroundColor: color}}>
        {arrow && <span>{arrow}</span>}
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
      <span className={"title"}>{playerData.שם}</span>
      <div
        style={{display: 'flex', flexDirection: "row", marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        {renderColumn(playerData["קבוצה"], playerData["קבוצה"] === rightPlayerData["קבוצה"] ? "green" : "grey")}
        {renderColumn(playerData["גיל"], playerData["גיל"] === rightPlayerData["גיל"] ? "green" : (Math.abs(playerData["גיל"] - rightPlayerData["גיל"]) < 3 ? "yellow" : "grey"), Math.abs(playerData["גיל"] - rightPlayerData["גיל"]) < 3 ? (playerData["גיל"] > rightPlayerData["גיל"] ? "up" : "down") : undefined)}
        {renderColumn(playerData["ישראלי/זר"], playerData["ישראלי/זר"] === rightPlayerData["ישראלי/זר"] ? "green" : "grey")}
        {renderColumn(playerData["פלייאוף"], playerData["פלייאוף"] === rightPlayerData["פלייאוף"] ? "green" : "grey")}
        {renderColumn(playerData["עמדה"], playerData["עמדה"] === rightPlayerData["עמדה"] ? "green" : "grey")}
        {renderColumn(playerData["מספר חולצה"], playerData["מספר חולצה"] === rightPlayerData["מספר חולצה"] ? "green" : "grey")}
      </div>
    </div>
  )
}