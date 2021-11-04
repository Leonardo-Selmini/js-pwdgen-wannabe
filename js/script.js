// ask name
const name = prompt("Insert your name");

// ask surname
const surname = prompt("Insert your surname");

// ask favourite color
const favouriteColor = prompt("insert your favourite color");

// number 21
const numberAtTheEnd = 21;

// print the result
const myPassword = name + surname + favouriteColor + numberAtTheEnd;
// console.log(myPassword);
document.getElementById("myPassword").innerHTML = myPassword;