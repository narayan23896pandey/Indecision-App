class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return "hi i am " + this.name + "!";
        return `Hi I am ${this.name} !`;

    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }

}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `. their major is ${this.major}.`;

        }
        return description;
    }

}
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();
        if (this.hasHomeLocation) {
            gretting += `. their home location is ${this.homeLocation}.`;

        }
        return gretting;
    }

}
/*const me = new Student('Narayan', 26, 'Computer science');
console.log(me.getDescription());
const other = new Student();
console.log(other.getDescription());*/
const me = new Traveler('Narayan', 26, 'India');
console.log(me.getGretting());
const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGretting());

