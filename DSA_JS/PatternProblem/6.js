var y = "";

function starPattern6() {
  for (let i = 5; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      y += j;
    }
    y += "\n";
  }
  console.log(y);
}

starPattern6();
