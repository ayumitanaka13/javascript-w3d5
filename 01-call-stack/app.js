function multiply(x,y) {
    return x * y;
}

function square(x) {
    return multiply(x,x);
}

function isRightTriangle(a,b,c){
    return square(a) + square(b) === square(c);
}
// console.log("Called first");
// console.log(isRightTriangle(3,4,5));
// console.log("Called last");

console.log("I print first");
setTimeout(() => {
    console.log("I print after 3 seconds");
}, 3000);
console.log("I print second");