var w = "";
function fourpattern() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      w += "*";
    }
    w += "\n";
  }
  console.log(w);
}

// fourpattern();

function numberPat() {
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      w += i;
    }
    w += "\n";
  }
  console.log(w);
}


