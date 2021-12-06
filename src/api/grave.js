export async function isOccupied({x, y, graves}) {
  graves.forEach(row => {
    row.forEach(grave => {
      console.log(grave?.data);
      const [gx, gy] = [grave?.data[3], grave?.data[4]];
      if(x === gx && y === gy) return grave;
    })
  });
  return false;
}
