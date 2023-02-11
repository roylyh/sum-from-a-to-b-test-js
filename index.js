
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let i = fromN;
  while (i < toN) {
    return i + sum(fromN + 1,toN);
  }
  return toN;

}

module.exports = sum;