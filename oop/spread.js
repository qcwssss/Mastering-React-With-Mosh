const first = { name: 'Mosh'};
const second = { job: 'Instructor'};

const combined = {...first, ...second, location: 'USA'};
console.log(combined);

// clone
const clone = { ...first };
console.log(clone);