function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Обидва аргументи мають бути числами");
    }
    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
    }
    return numerator / denominator;
}

function callDivide(num1, num2) {
    try {
        const result = divide(num1, num2);
        console.log("Результат:", result);
    } catch (error) {
        console.error("Помилка:", error.message);
    } finally {
        console.log("Робота завершена");
    }
}

callDivide(10, 2);
callDivide(10, 0);
callDivide(10, "abc");