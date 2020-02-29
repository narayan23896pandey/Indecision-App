var nameVar = "john";
var nameVar = "mike";
console.log("nameVar", nameVar);
let nameLet = "andrew";
console.log("nameLet", nameLet);
const nameConst = "sonle";
console.log("nameConst", nameConst);

/*function getPetName() {
    var petName = "tommy";
    return petName;
}
getPetName();*/
//its not working because petName is not define
//block scope
/*
function getPetName() {
    const petName = "tommy";
    return petName;
}
const petName = getPetName();
*/
/*var fullName = "andrew charlesh";
if (fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);*/
const fullName = "mike charlesh";
let firstName;
if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);