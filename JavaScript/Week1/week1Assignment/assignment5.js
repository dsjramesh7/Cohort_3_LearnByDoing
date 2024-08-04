const users = [
  {
    name: "rahul",
    age: 23,
    gender: "male",
  },
  {
    name: "shreya",
    age: 19,
    gender: "female",
  },
  {
    name: "rula",
    age: 13,
    gender: "male",
  },
  {
    name: "lalit",
    age: 23,
    gender: "male",
  },
];

function search(arr) {
  // using filter method 
  const fileredArray = arr.filter((f) => f.gender === "male" && f.age > 18);
  return fileredArray;

  // using for loop 
  
  // const filteredArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].age > 18 && arr[i].gender === "male") {
  //     filteredArray.push(arr[i]);
  //   }
  // }
  // return filteredArray;
}
const getfilterdArray = search(users);
console.log(getfilterdArray);
