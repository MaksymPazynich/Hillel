const users = [
    { name: "Alina", email: "alina@test.com", age: 22 },
    { name: "Viktor", email: "viktor@test.com", age: 28 },
    { name: "Natalia", email: "natalia@test.com", age: 35 }
];

for (const { name, email, age } of users) {
    console.log(`Користувач: ${name}, Email: ${email}, Вік: ${age}`);
}