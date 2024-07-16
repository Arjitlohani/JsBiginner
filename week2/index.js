// // destructure in object //es6 new feature

// const myObject ={
//     firstName:"Arjit",
//     lastName:"Lohani",
//     language:"JavaScript",
//     age :70,
//     createdAt : new Date()
// }

// const {firstName,lastName,language,age,createdAt} = myObject;

// const jsonStringifield = JSON.stringify(myObject);

// const normalObject = JSON.parse(jsonStringifield);

// console.log(jsonStringifield, "JSON");
// console.log(normalObject, "Normal Object");


const obhectOne={
	firstname: "Anita",
	lastname: "Chhatkuli",
	age: 45,
	cratedAt: new Date
}

const {firstname, lastname, age, createdAt}=obhectOne;

const newObject =JSON.stringify(obhectOne);

const norObj= JSON.parse(newObject);



console.log(newObject);
console.log(norObj);