// This
const person = {
    name: "Mosh",
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
console.log(walk);
walk();

// arrow functions don't re-bind this
const person2 = {
    talk() {
        // var self = this;
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
    }
};

person2.talk();