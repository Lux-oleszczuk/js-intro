const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");

btn.addEventListener("click", clickFunction);

function clickFunction() {
    document.getElementById("my-paragraph").innerHTML = "Suffering!!!";
}