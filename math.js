export const add = function (x, y) {
    return x + y;
}
export const subtract = function (x, y) {
    return x - y;
}
export const multiply = function (x, y) {
    return x * y;
}
const divide = function (x, y) {
    return y !== 0 ? x / y : "Division by zero error";
}
export default divide;
