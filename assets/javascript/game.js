
//scores
let wins = 0;
let losses = 0;
let guessesRemaining = 5;

//wordlist
let words = ["terminal", "homebrew", "jQuery", "DOCTYPE"];

//choose random word out of wordlist


let wordChoice = words[Math.floor(Math.random() * words.length)];
let wordChoiceIndex = words.indexOf(wordChoice);


// //display random word using dashes
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

    console.log(randomWord);
    console.log(letterIndex)

    function refresh() {
        guessesremaining = 5;
        wordChoice = words[Math.floor(Math.random() * words.length)];
        wordChoiceIndex = words.indexOf(wordChoice);
        for (i = 1; i < wordChoice.length; i++) {
            dashes.push("_");
        }
    }


    if (letterIndex > -1) {

        //display correctly guessed letters
        dashes[letterIndex] = wordChoice[letterIndex];
        document.getElementById("wordSpot").innerText = dashes.join(" ");

    }
    // else
    //     if (guessesRemaining < 0) {
    //         losses = losses - 1;
    //         document.getElementById("losses").innerText(losses);
    //         refresh();
    //     }
    //     else
    //         if (dashes = wordChoice) {
    //             wins++;
    //             document.getElementById("wins").innerText(wins)
    //             refresh();
    //         }
            else {
                guessesRemaining = guessesRemaining - 1
                document.getElementById("guessesRemaining").innerText = guessesRemaining;
            }








});



//click on document to start the game
$(document).on("click", function () {
    $("#theWord").html("<div id=wins>wins: " + wins + "</div>");
    $("#theWord").append("<div id=losses>losses: " + losses + "</div>");
    $("#theWord").append("<div id=guessesRemaining>Guesses Remaining: " + guessesRemaining + "</div>");
    $("body").append("<div id=wordSpot>" + dashes.join(" ") + "</div>");
});










