let num = 0;

let area = document.querySelector("#area");
const btns = document.querySelectorAll(".btn");

function areaRect(){
    let length = document.getElementById("length").value;
    let width= document.getElementById("width").value;

    num = length * width;
    area.textContent = num;
}

function areaCirc() {
    let rad = document.getElementById("radius").value;
    let pi = 3.14;
    num = pi *(rad * rad);
    area.textContent = num;
}

function areaTri(){
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;

    num = base * height / 2;
    area.textContent = num;
}

function areaSqr(){
    let side = document.getElementById("side").value;

    num = side * side;
    area.textContent = num;
}
