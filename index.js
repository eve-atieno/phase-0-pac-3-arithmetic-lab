let a, b;
let n = 5
function beforeEach(){
    a = Math.floor(Math.random() * 1000);
    b = Math.floor(Math.random() * 1000);
}
beforeEach()
function add(a, b){
    return a + b;
}
beforeEach()
function subtract(a, b){
    return a - b;
}
beforeEach()
function multiply(a, b){
    return a * b;
}
beforeEach()
function divide(a, b){
    return a / b;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
function makeInt(n){
    return parseInt(n, 10)
}
function preserveDecimal(n){
    return parseFloat(n)
}
console.log(add(1300, 39));
console.log(subtract(2, 145));
console.log(multiply(23250, 5))
console.log(divide(0.8622848200312989, 1));
console.log(increment(115));
console.log(decrement(615));
console.log(makeInt('0x2328'));
console.log(makeInt('sldkjflksjf'));
console.log(preserveDecimal('2.222'));
console.log(preserveDecimal('sldkjflksjf'));

