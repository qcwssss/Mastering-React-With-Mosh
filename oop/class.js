import { Person } from ".//models/Person"

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walk');
    }
}

// const person = new Person('Mosh');
// person.walk();

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('Mosh', 'Bachelor');
teacher.teach();
console.log(teacher);