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
const me = new Person('Narayan', 26);
console.log(me.getGretting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getGretting());
console.log(other.getDescription());