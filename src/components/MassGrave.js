import React, {useState} from "react";

function MassGrave({ onLocationChange, graves }) {
  // console.log("mass grave");
  // console.log("graves", graves);
  
  const sample_graves = [
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  ];

  function toImage(x, y, grave) {
    console.log("toImage");
    if (!grave)
      return (
        <button class="grass" onClick={() => onLocationChange(x, y)}>
          🌱
        </button>
      );
    else return <button class="grave" onClick={() => onLocationChange(x, y, grave)} key="{c.tokenId}">🪦</button>;
  }

  // TODO: change sample_graves to graves
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
