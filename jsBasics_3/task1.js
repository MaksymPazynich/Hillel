function getAreaDeclaration(width, height) {
    return width * height;
}
console.log("Function Declaration:", getAreaDeclaration(5, 10));

const getAreaExpression = function(width, height) {
    return width * height;
};
console.log("Function Expression:", getAreaExpression(5, 10));

const getAreaArrow = (width, height) => width * height;
console.log("Arrow Function:", getAreaArrow(5, 10));