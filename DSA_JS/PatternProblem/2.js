var s = "";

function starpattern2() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i + 1; j++) {
      s += "*";
    }
    s += "\n";
  }
  console.log(s);
}

starpattern2();


// *
// **
// ***
// ****
// *****