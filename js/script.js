const imageOne = "assets/kitty.jpg";
const imageTwo = "assets/puppies.jpg";
const imageThree = "assets/weirdkitty.jpg";

const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img")

let clickCounter = 0;
let characterCounter = 1;

function clickFunction() {
    console.log("the suffering button have been clicked to spread more suffering")
    clickCounter = clickCounter + 1;
    characterCounter = characterCounter + 1;

    if(characterCounter > 3) {
        characterCounter = 1;
    }

    myParagraph.innerHTML = "I am a character" + characterCounter;


    if(characterCounter === 1) {
        characterImage.src = imageOne;
    } return;
    if(characterCounter === 2) {
        characterImage.src = imageTwo;
    } return;
    if(characterCounter === 3) {
        characterImage.src = imageThree;
    } return;

    document.getElementById("my-paragraph").innerHTML = "Suffering!!!" + clickCounter + "times";
}
btn.addEventListener("click", clickFunction);