

const body = document.querySelector("body");
body.style.backgroundColor = "lightblue";
const clock = document.querySelector("#clock");
const heading = document.createElement("h1");
heading.style.color = "black";
heading.style.textAlign = "center";
heading.textContent = "Clock";
body.appendChild(heading);

setInterval(myTimer,1000)

function myTimer () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const sec = date.getSeconds();
    const ampm= hours>=12 ? 'PM' : 'AM';
    clock.textContent = `${hours}:${minutes}:${sec} ${ampm}`;
}

myTimer()