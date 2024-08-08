let q = "";

function starPattern3() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      q += i;
    }
    q += "\n";
  }
  console.log(q);
}

starPattern3();
