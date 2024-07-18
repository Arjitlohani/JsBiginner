const parentDiv = document.getElementById('myDiv');


const btn = document.querySelector('#btn');
const formName = document.querySelector('#name');
const nameShow= document.createElement("p");
const heading = document.createElement("h3");
heading.textContent= "To Do List";
parentDiv.appendChild(heading);



btn.onclick=function(){
    // alert("I am clicked");
    // const formValue = formName.value.trim();
    // if (formValue){
    //     nameShow.textContent = formValue;
    //     parentDiv.appendChild(nameShow);
    // }else{
    //     alert("Please enter your name");
    // }
    const listValue=formName.value.trim();
    const arr=[listValue];
    if (listValue.length>0){
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.textContent = arr;
        ul.appendChild(li);
        parentDiv.appendChild(ul);
    }else {
        alert("Please enter a value");
    }
}