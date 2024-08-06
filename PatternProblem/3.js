let q = "";

function starPattern3() {
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= i + 1; j++) {
      q += j;
    }
    q += "\n";
  }
  console.log(q);
}

starPattern3();
