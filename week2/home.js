const myDiv =document.getElementById('div');
// myDiv.style.backgroundColor="red";

const btn= document.createElement('button');
btn.textContent="Click Me";
myDiv.appendChild(btn);

btn.addEventListener("click",()=>{
    if (myDiv.style.backgroundColor === "red") {
        myDiv.style.backgroundColor = "blue";
    } else {
        myDiv.style.backgroundColor = "red";
    }
    // myDiv.style.backgroundColor === "red" ? myDiv.style.backgroundColor = "blue" : myDiv.style.backgroundColor = "red";

    

});


    