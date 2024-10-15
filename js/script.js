//defne cources for each image in an array
const imageSources = ["assets/kitty.jpg", "assets/puppies.jpg","assets/weirdkitty.jpg" ];
//define alternative text
const altText = ["A terryfied white kitten","Cyriak's Yorkshire puppies that have furry snake tails instead of a common puppies' body", "a kitty with a big human eyes instead of kotten's eyes" ]
//characters' names
const characterName = ["terryfied kitten", "Cyriak's puppies", "Weird kitty"]

//store which character is currently being displayed
const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img")

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
//update paragraph text with a new counter
myParagraph.innerHTML = "I am a character" + characterCounter;


    if(characterCounter === 1) {
        characterImage.src = imageSources[0];
        characterImage.alt = altText[0];
        myParagraph.innerHTML = characterName[0];
        return;
    }
    if(characterCounter === 2) {
        characterImage.src = imageSources[1];
        characterImage.alt = altText[1];
        myParagraph.innerHTML = characterName[1];
        return;
    }
    if(characterCounter === 3) {
        characterImage.src = imageSources[2];
        characterImage.alt = altText[2];
        myParagraph.innerHTML = characterName[2];
        return;
    }

}
btn.addEventListener("click", clickFunction);