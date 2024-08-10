function anagram(str1, str2) {
  const firstWord = str1.split("").sort().join("");
  const secondWord = str1.split("").sort().join("");

  if (firstWord === secondWord) {
    return true;
  } else {
    return false;
  }
}

console.log(anagram("listen", "hello"));
