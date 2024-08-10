let string = "luffy here";
// console.log(string.split("").reverse().join(""));

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
}

reverseString(string);


