var r = "";
function patternStar1() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      r += "*";
    }
    r += "\n";
  }

  console.log(r);
}

patternStar1();
// ****
// ****
// ****
// ****
