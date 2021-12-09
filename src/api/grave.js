export function isOccupied(x, y, graves) {
  return typeof(graves[x][y]) === 'object';
}
