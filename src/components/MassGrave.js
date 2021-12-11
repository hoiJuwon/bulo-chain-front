import React, {useState} from "react";
import Button from '@mui/material/Button';

function MassGrave({ onLocationChange, graves }) {
  function toImage(x, y, grave) {
    if (!grave)
      return (
        <Button className="grass" onClick={() => onLocationChange(x, y)}>
          🌱
        </Button>
      );
    else return <Button className="grave" onClick={() => onLocationChange(x, y, grave)} key="{c.tokenId}">🪦</Button>;
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
