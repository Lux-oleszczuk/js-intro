const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img")

let clickCounter = 0;

function clickFunction() {
    console.log("the suffering button have been clicked to spread more suffering")
    clickCounter = clickCounter + 1;
    characterImage.src = "assets/puppies.jpg";
    document.getElementById("my-paragraph").innerHTML = "Suffering!!!" + clickCounter + "times";
}
btn.addEventListener("click", clickFunction);