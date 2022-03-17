import React from "react";
import {players} from "./data";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa";

export const SingleGuess = ({playerId, rightPlayerId}) => {
  const playerData = players[playerId];
  const rightPlayerData = players[rightPlayerId];

  const renderColumn = (text, color, arrow) => {
    return (
      <div style={{flex: 1, margin: 5, border: "1px solid black", borderRadius: 10, backgroundColor: color}}>
        {arrow === "down" && <FaArrowAltCircleDown/>}
        {arrow === "up" && <FaArrowAltCircleUp/>}
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: "100%", border: "1px solid black", borderRadius: 10, marginTop: 10}}>
      <h2>{playerData.שם}</h2>
      <div
        style={{display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
        {renderColumn(playerData["קבוצה"], playerData["קבוצה"] === rightPlayerData["קבוצה"] ? "green" : "grey")}
        {renderColumn(playerData["גיל"], playerData["גיל"] === rightPlayerData["גיל"] ? "green" : (Math.abs(playerData["גיל"] - rightPlayerData["גיל"]) < 3 ? "yellow" : "grey"), Math.abs(playerData["גיל"] - rightPlayerData["גיל"]) < 3 ? (playerData["גיל"] > rightPlayerData["גיל"] ? "down" : "up") : undefined)}
        {renderColumn(playerData["ישראלי/זר"], playerData["ישראלי/זר"] === rightPlayerData["ישראלי/זר"] ? "green" : "grey")}
        {renderColumn(playerData["פלייאוף"], playerData["פלייאוף"] === rightPlayerData["פלייאוף"] ? "green" : "grey")}
        {renderColumn(playerData["עמדה"], playerData["עמדה"] === rightPlayerData["עמדה"] ? "green" : "grey")}
        {renderColumn(playerData["מספר חולצה"], playerData["מספר חולצה"] === rightPlayerData["מספר חולצה"] ? "green" : "grey")}
      </div>
    </div>
  )
}