//filter (ES6) is a method that creates a new array with all elements
// that pass the test implemented by the provided function.

const age = [30,40,50,60,20,20,10,17];

let ageBelow30 = age.filter((val,index)=>val<30);

const myNames = ["Arjit","Rajan","Anita","Ranjit"];

console.log(ageBelow30);

let names= myNames.filter((val,index)=>val.includes("a"));

console.log(names);

//Every (ES6) is a method that tests whether all elements
// in the array pass the test implemented by the provided function.
// returns boolen value

const myAge=[30,80,50,60,20,20,10,17];
let isEveryAgeBelow50=myAge.every((val)=> val<50);
console.log(isEveryAgeBelow50);


//Some (ES6) is a method that tests whether at least one element
const someAge=[18,24,45,10,1.3,5];

let isSomeAgeAbove20=someAge.some((val)=>val>20);
console.log(isSomeAgeAbove20);

//reduce (ES6) is a method that executes a reducer function 
//(that you provide) on each element of the array, resulting in a single output value.

const amounts =[100,200,500,500,200];
let totalAmounts=amounts.reduce((total,val)=>total+val);
console.log(totalAmounts);