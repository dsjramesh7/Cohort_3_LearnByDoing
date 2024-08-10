let string = "dance";
function pallcheck(str) {
  let reverseStr = string.split("").reverse().join("");
  if (str === reverseStr) {
    return true;
  }else{
    return false
  }
}
const isit = pallcheck(string);
console.log(isit)
