// Complete the repeatedString function below.
function repeatedString(s, n) {
  var counter = 0; // O(1)
  var repeatedString = ''; // O(1)
  while (repeatedString.length < n) {
    for (let letter of s) {
      repeatedString = repeatedString.concat(letter); // O(n)
      if(letter.includes('a')) counter++; // O(1)
      if (repeatedString.length) break; // O(1)
    }
  }
  return counter;
}
// O(n) ------<
// O(n^2) ------<
// O(log n)
console.log(repeatedString('aba', 10));