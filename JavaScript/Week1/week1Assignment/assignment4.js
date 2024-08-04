// Write a function called sum that finds the sum from 1 to a number

function sumOfN(n) {
  let sumOfNum = 0;
  for (let i = 0; i <= n; i++) {
    sumOfNum = sumOfNum + i;
  }
  console.log(sumOfNum);
}

sumOfN(30);
