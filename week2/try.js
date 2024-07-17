const myDiv =document.getElementById('myDiv');
const image = document.createElement('img');
image.src= "a.png";
image.id="img";
image.innerHTML = `${image}`;
myDiv.appendChild(image);

const btn = document.createElement('button');
btn.textContent="Click Me";
myDiv.appendChild(btn);


btn.addEventListener("click",()=>{
    let currentSRC = document.getElementById("img").src;
    console.log(currentSRC, 'CURREWNT')
    currentSRC.includes("a.png") ? image.src = "b.png" : image.src = "a.png"

    
});