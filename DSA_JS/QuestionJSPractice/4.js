let arr = [1, 4, 5, 6, 1, 2, 2, 4, 5];

const uniquNumarr = [];
for (let i = 0; i < arr.length; i++) {
  if (uniquNumarr.indexOf(arr[i]) === -1) {
    uniquNumarr.push(arr[i]);
  }
}

console.log(uniquNumarr);
console.log(...new Set(arr));
