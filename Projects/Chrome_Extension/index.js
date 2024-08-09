const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

let myLeads = [];

inputBtn.addEventListener("click", () => {
  console.log(inputEl.value)
  console.log("Button clicked from addEventListener");
});
