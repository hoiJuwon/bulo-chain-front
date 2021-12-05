function MassGrave({ onLocationChange }) {
  // TODO : fetch valid places for new graves
  const graves = [
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  ];

  function toImage(x, y, c) {
    if (c === 0)
      return (
        <button class="grass" onClick={() => onLocationChange(x, y)}>
          🌱
        </button>
      );
    // TODO : onClick하면 등록된 grave 보여줌
    else return <button class="grave">🪦</button>;
  }

  return (
    <>
      <div>
        <table>
          <tbody>
            {graves.map((row, i) => {
              return (
                <tr>
                  {row.map((isGrave, j) => {
                    return <td>{toImage(i, j, isGrave)}</td>;
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
