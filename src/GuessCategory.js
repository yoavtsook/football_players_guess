import React from "react";

export const GuessCategory = () => {
  const renderCategory = (categoryName, renderBorder = true) => {
    return (
      <span
        style={{flex: 1, borderRight: renderBorder ? "1px solid black" : undefined, textAlign: 'center'}}>{categoryName}</span>
    )
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 40,
      marginTop: 10,
      marginBottom: 10
    }}>
      {renderCategory("קבוצה")}
      {renderCategory("גיל")}
      {renderCategory("ישראלי/זר")}
      {renderCategory("פלייאוף")}
      {renderCategory("עמדה")}
      {renderCategory("מספר חולצה", false)}
    </div>
  )
}