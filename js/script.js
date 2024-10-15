//defne cources for each image in an array
const imageSources = ["assets/kitty.jpg", "assets/puppies.jpg","assets/weirdkitty.jpg" ];
//define alternative text
const altText = ["A terrified white kitten","Cyriak's Yorkshire puppies that have furry snake tails instead of a common puppies' body", "a kitty with a big human eyes instead of kotten's eyes" ];
//characters' names
const characterName = ["terrified kitten", "Cyriak's puppies", "Weird kitty"];

//store which character is currently being displayed
const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img")
//imput and submit button
const myButton2 = document.getElementById("btn2");
const imput1 = document.getElementById("imput")

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
//image change button execution
btn.addEventListener("click", clickFunction);
//update character name to what is stored in the imput function.
function clickFunction2(){
    myParagraph.innerHTML = imput1.value;
}
//inpit and submit button click effect execution
myButton2.onclick = clickFunction2;
imput1.onclick = myButton2;