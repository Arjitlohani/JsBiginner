// destructure in object //es6 new feature

const myObject ={
    firstName:"Arjit",
    lastName:"Lohani",
    language:"JavaScript",
    age :70,
    createdAt : new Date()
}

const {firstName,lastName,language,age,createdAt} = myObject;

const jsonStringifield = JSON.stringify(myObject);

const normalObject = JSON.parse(jsonStringifield);

console.log(jsonStringifield, "JSON");
console.log(normalObject, "Normal Object");