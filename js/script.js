//defne cources for each image
const imageOne = "assets/kitty.jpg";
const imageTwo = "assets/puppies.jpg";
const imageThree = "assets/weirdkitty.jpg";

//store which character is currently being displayed
const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img")

//define alternative text
const altText1 = "A weird kitty"
const altText2 = "Cyriak's Yorkshire puppies that have furry snake tails instead of a common puppies' body"
const altText3 = "a kitty with a big human eyes instead of kotten's eyes"

let characterCounter = 1;

// const images = ["assets/kitty.jpg", "assets/puppies.jpg","assets/weirdkitty.jpg" ]


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
//update paragraph text with a new counter
myParagraph.innerHTML = "I am a character" + characterCounter;


    if(characterCounter === 1) {
        characterImage.src = imageOne;
        characterImage.src = altText1;
        return;
    }
    if(characterCounter === 2) {
        characterImage.src = imageTwo;
        characterImage.src = altText2;
        return;
    }
    if(characterCounter === 3) {
        characterImage.src = imageThree;
        characterImage.src = altText3;
        return;
    }

}
btn.addEventListener("click", clickFunction);