import React, {useState} from "react";
import Button from '@mui/material/Button';

function MassGrave({ onLocationChange, graves, x, y }) {
  function toImage(x, y, grave) {
    if (!grave)
      return (
        <Button className="grass" onClick={() => onLocationChange(x, y, null)}>
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
                    return <td key={j} style={(parseInt(x,10)===i && parseInt(y,10)===j) ? {border:'solid black'} : {border:'solid white'}}>
                      {toImage(i, j, grave)}
                    </td>;
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
