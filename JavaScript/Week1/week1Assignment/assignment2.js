// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(13));
console.log(canVote(18));
console.log(canVote(21));




