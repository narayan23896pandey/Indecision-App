// arguments object no longer bound witharrow function
/*const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));*/
const add = (a, b) => a + b;
console.log(add(55, 1));
/*const add = (a, b) => {
    console.log(arguments);
    return a + b;
}
// it show error
console.log(add(56, 33));
// this object no longer bound with arrow function
/*const user = {
    name: 'Andrew',
    cities: ['New York', 'Dublin', 'Delhi'],
    printPlacesLived: function () {
        const that = this;
        this.cities.forEach(function (city) {   
            console.log(that.name + ' is lived in ' + city);

        });

    }
};*/
/*const user = {
    name: 'Andrew',
    cities: ['New York', 'Dublin', 'Delhi'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' is lived in ' + city);

        });

    }
};*/
/*
const user = {
    name: 'Andrew',
    cities: ['New York', 'Dublin', 'Delhi'],
    printPlacesLived: () => {
        this.cities.forEach((city) => {
            console.log(this.name + ' is lived in ' + city);
            // it so error cities is undefine object.

        });

    }
};*/
/*
user.printPlacesLived();*/

const user = {
    name: 'Andrew',
    cities: ['New York', 'Dublin', 'Delhi'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + " is live in " + city;
        });
        return cityMessages;

    }
};
console.log(user.printPlacesLived());
// challange
//take multiple number - array of number
//multiply by single number
// return a new array where number is multiply
const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }

};
console.log(multiplier.multiply());