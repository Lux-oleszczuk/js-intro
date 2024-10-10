const imageOne = "assets/kitty.jpg";
const imageTwo = "assets/puppies.jpg";
const imageThree = "assets/weirdkitty.jpg";

//
const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img")
//store which character is currently being displayed
let characterCounter = 1;

/**
 * Update character counter and display next one
 * set counter back to 1 of 3 was surpassed
 * @returns  when character is chosen
 */

function clickFunction() {
//update character counter
    characterCounter = characterCounter + 1;
//set up the character counter back to 1
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

}
btn.addEventListener("click", clickFunction);