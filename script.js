
// let marks = prompt("enter your marks");
// if(marks>80&&marks<=100){
//     console.log("A");
// }else if(marks>=70&&marks<=79){
//     console.log("B");


// }else if (marks>=60&&marks<=69){
//     console.log("C");
// }else if (marks>=50&&marks<=59){
//     console.log("D");   
// }else if (marks>=40&&marks<=49){
//     console.log("E");
// }else{
//     console.log("F");
// }

// for (i =0;i<5;i++){
//     console.log(i);
// }
// let num=0;
// for (i=1;i<=5;i++){
//     for (j=1;j<=i;j++){
//         num = parseint(num*10+j);
//         console.log(j);
//     }
// }
// let obj= {
//     arj: "Arjit",
//     loh: "Lohani"

// }

// console.log(`my name is ${obj.arj[2]}  ${obj.loh[2]}`);
// console.log(typeof(obj.arj));

// let str= "Arjit is a very good boy ";
// let str1="he is yayaaa";
// console.log(str.concat(str1));

// let str ="hello";
// console.log(str.replace("h","you"));


// let fullName = prompt("Enter your full name");
// let userName = fullName+fullName.length;
// console.log(`Your user name = @${fullName}${fullName.length}`);

// let mark = [23,45,67,78,90]
// let sum=0;
// // for (i=0;i<mark.length;i++){
// //     sum+=mark[i];   
// // }
// for (let i of mark){
//     sum+=i;
// }
// console.log(sum);

// let hero =["superman","batman","spiderman","ironman"];
// let i=0;
// // for (let i=0;i<hero.length;i++){
// //     console.log(hero[i]);
// // }
// while(hero.length>0){
//     console.log(hero[i])
//     i ++;
// }

// let items = [250,645,300,900,50]
// console.log(items);
// for (i=0;i<items.length;i++){
//     items[i]=items[i]-(items[i]/10)
// }
// console.log(items);

// let items =["Patato","Tomato","Onion","Cabbage","Carrot"]

// let com = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// com.shift();
// com.splice(1,2,'Ola')
// com.push("Amazone");
// console.log(com);
// function myFunction(){
//     console.log("this is my first function");
//     console.log("JS is fun");

// }
// myFunction();

// function myFunction(msg){
//     console.log(msg);

// }

// function add(a,b){
//    return a+b;   
// }
// let c= add(2,3);
// console.log(c);



// const sum1 = (a,b)=> {
//     console.log(a+b);
// }

//  const multiplication=(a,b)=>{
//         console.log(a*b);
//  }


// function countVowels(str){
//     let count =0;
//     newStr = str.toLowerCase();
//     for (const char of newStr){
//         if (char==="a"|| char=== "e" || char==="i"||char==="o"||char==="u"){
//             count++;

//         }
//     }
//     return count;
// }

// const arrVow=(strin)=>{
//     let count =0;
//     let str = strin.toLowerCase();
//     for (const char of str){
//         if (char==="a"|| char=== "e" || char==="i"||char==="o"||char==="u"){
//             count++;

//         }
//     }
//     return count;
// }

// a=["arjit","loh","arj","lohani"];
// // a.forEach(function printVal(val){
// //     console.log(val);
// // })

// a.forEach( (val,q)=> {
//     console.log(val.toUpperCase(), q);
    
// });

// let num =[1,2,3,4,5];
// num.forEach(function square(val){
//     console.log(val*val);
// }) 
// let newArr = num.map((val)=>{
//     return val*val;
//  })
// const calc= val=>{
//     console.log(val*val);
// }

// let arr=[1,2,3,4];
// let filtArr= arr.filter((val)=>{
//     return val<=6;
// });
// console.log(filtArr);
// const output = arr.reduce((res,curr)=>{
//     return res>curr?res:curr;
    
    
// });
// console.log(output);

// let marks =[67,78,90,98,97,91];
// const result=marks.filter((val)=>{
//     return val>=90;
// })
// console.log(result);

// let n = prompt("Enter the number of elements");
// let arr=[];
// for (i =1;i<=n;i++){
//     arr[i-1]=i;

// }
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// const multiply = arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(output);
// console.log(multiply);

// let button = document.getElementById("myButton");
// console.log(button);

// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);

// let button = document.getElementById("mybutton"); 
// console.dir(button);

// let heading = document.getElementsByClassName("heading");
// console.log(heading);
// console.dir(heading);

// let paras = document.getElementsByTagName("p");
// console.log(paras);

let element = document.querySelector("p");
console.dir(element);




// let elementAll = document.querySelectorAll("p");
// console.dir(elementAll);