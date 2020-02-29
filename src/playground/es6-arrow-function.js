/*function square(x) {
    return x * x;
};
console.log(square(3));
const squareArrow = (x) => {
    return x * x;
};
const squareArrow = (x) => x * x;
console.log(squareArrow(12));*/
//use Arrow function
//get firstName("mike smith") => mike
// create regular arrow function
// create arrow function using short hand
/*const fullName = "mike smith";
let firstName;
if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);*/
/*const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};
console.log(getFirstName("mike smith"));*/
const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("mike smith"));