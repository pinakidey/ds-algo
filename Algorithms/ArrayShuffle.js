/* 
The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.

See https://github.com/coolaj86/knuth-shuffle
*/

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  console.log(shuffle(["A", "B", "C", "D", "E"]))