const person = {
    firstName: "Ivan",
    lastName: "QA",
    age: 30
};

person.email = "ivan.qa@example.com";
delete person.age;

console.log(person);