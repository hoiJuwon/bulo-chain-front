import React, {useState} from "react";

function MassGrave({ onLocationChange, graves }) {
  function toImage(x, y, grave) {
    if (!grave)
      return (
        <button className="grass" onClick={() => onLocationChange(x, y)}>
          🌱
        </button>
      );
    else return <button className="grave" onClick={() => onLocationChange(x, y, grave)} key="{c.tokenId}">🪦</button>;
  }

  return (
    <>
      <div>
        <table>
          <tbody>
            {graves.map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((grave, j) => {
                    return <td key={j}>{toImage(i, j, grave)}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MassGrave;
