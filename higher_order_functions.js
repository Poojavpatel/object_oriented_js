/* A Higher order function is a function that takes a function as an argument or a function that returns a function as an argument */
//1- a function that accepts a function as an argument
// document.addEventListener('click',myFunction);
// function myFunction(){
//     console.log('You clicked ..');
// }

//2- a function that returns a function as an argument
function MultiplyMe(multiplier){
    return function(x){
        return x * multiplier; 
    }
}

let doubleMe = MultiplyMe(2);
let tripleMe = MultiplyMe(3);

console.log(doubleMe(10));
console.log(tripleMe(5));

//3- Useful higher order function examples (that are a part of core js)
// forEach is a function that takes a function as an argument and runs it for each ele in an array
let colors=['red','green','yellow','blue','grey'];
colors.forEach(saySomething);

function saySomething(color){
    console.log(`${color} is a great color`);
}