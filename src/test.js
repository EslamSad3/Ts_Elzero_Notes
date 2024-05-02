// function showData(name, age, country) {
//   return `${name} ${age} ${country}`;
// }

// console.log(showData("ee")); // ee undefined undefined

function showData(name, age, country = "un") {
  return `${name} ${age} ${country}`;
}

console.log(showData("ee")); // ee undefined un
