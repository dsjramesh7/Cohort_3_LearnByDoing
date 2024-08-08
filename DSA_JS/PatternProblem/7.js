let u = "";

function starpattern7() {
  for (let i = 1; i <= 5; i++) {
    for (let j = i; j < 5; j++) {
      u += " ";
    }
    for (let q = 1; q <= i + (i - 1); q++) {
      u += "*";
    }
    u += "\n";
  }
  console.log(u);
}

starpattern7();
