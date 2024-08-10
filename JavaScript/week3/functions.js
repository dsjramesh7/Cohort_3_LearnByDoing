// Find sum of two numbers
function sum(a, b) {
  return a + b;
}

const answer = sum(12, 13);
// console.log(answer)

//sum 1 to n
function sumofallNum(n) {
  let sumNum = 0;
  for (let i = 1; i <= n; i++) {
    sumNum += i;
  }
  return sumNum;
}

console.log(sumofallNum(30));
