let string = "I read any book which are awesome like gogogagagagag is it fun";

function longestword(str) {
  let words = str.split(" ");
  let longestword = "";

  for (let word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  console.log(longestword);
}

longestword(string);
