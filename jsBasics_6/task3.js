const car1 = {
    brand: "Tesla",
    model: "Model 3",
    year: 2022
};

const car2 = {
    brand: "BMW",
    model: "X5",
    owner: 2024
};

const car3 = { ...car1, ...car2 };

console.log(car3);