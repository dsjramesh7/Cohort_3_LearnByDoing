// *****
// ****
// ***
// **
// *

// let w = "";
// function starPattern5() {
//   for (let i = 5; i > 0; i--) {
//     for (let j = i; j > 0; j--) {
//       w += "$";
//     }
//     w += "\n";
//   }
//   console.log(w);
// }

// starPattern5();

let t = "";
function starPattern5() {
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      t += "$";
    }
    t += "\n";
  }
  console.log(t);
}

starPattern5();
