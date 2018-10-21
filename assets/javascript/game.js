
//scores
let wins = 0;
let losses = 0;
let guessesRemaining = 5;

//wordlist
let words = ["terminal", "homebrew", "jQuery", "DOCTYPE"];

//choose random word out of wordlist


let wordChoice = words[Math.floor(Math.random() * words.length)];
let wordChoiceIndex = words.indexOf(wordChoice);


//display random word using dashes
let dashes = ["_"];
for (i = 1; i < wordChoice.length; i++) {
    dashes.push("_");
}

//listen for keyboard input
document.addEventListener('keydown', function (event) {
    let key = event.key;
    key = key.toString();

    //search random word for keyboard inputs
    let randomWord = wordChoice.split("");
    let letterIndex = randomWord.indexOf(key);
    console.log(randomWord)
    console.log(letterIndex)


    if (letterIndex > -1) {
        //display correctly guessed letters
        dashes[letterIndex] == wordChoice[letterIndex];
        $("#theWord").append(dashes)
    }


});













//click on document to start the game
$(document).on("click", function () {
    $("#theWord").html("<div id=wins>wins: " + wins + "</div>");
    $("#theWord").append("<div id=losses>losses: " + losses + "</div>");
    $("#theWord").append("<div id=guessesRemaining>Guesses Remaining: " + guessesRemaining + "</div>");
    $("body").append("<div id=wordSpot>" + dashes.join(" ") + "</div>");
});










