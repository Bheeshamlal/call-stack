let button = document.querySelector("button");

button.addEventListener("click", f2);

function f1(){
    console.log("f1 executed");
}

function f2(){
    f1();
    console.log("f2 executed");
}