const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");

let clickCounter = 0;

function clickFunction() {
    clickCounter = clickCounter + 1;
    document.getElementById("my-paragraph").innerHTML = "Suffering!!!" + clickCounter + "times";
}
btn.addEventListener("click", clickFunction);