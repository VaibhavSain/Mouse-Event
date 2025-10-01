const x = document.querySelector("#X");
const y = document.querySelector("#Y");


function coordinate(event) {
    y.innerText = event.clientY;
    x.innerText = event.clientX;
}