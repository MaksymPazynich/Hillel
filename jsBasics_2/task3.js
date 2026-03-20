const number = 5;

// Варіант з циклом for
console.log(`--- Таблиця множення для ${number} (цикл for) ---`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Варіант з циклом while
console.log(`\n--- Таблиця множення для ${number} (цикл while) ---`);
let j = 1;
while (j <= 10) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
}