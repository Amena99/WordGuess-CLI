var inquirer = require("inquirer");
var Word = require("./Word.js");
var Movie = require("./Letter.js")
var word = "";
var counter;
var guessesRemain = 10;
var newWord;
var count_rem = 30;
var wordsArray = ["sunshine", "mountains", "treetops", "grasslands", "meadows"];

function randomWord(){
    let index = Math.floor((Math.random() * 4)+0);
    console.log("\n wordsArray Index: " + index);
    word = wordsArray[index];
    
    // console.log(word);
    return word;
}

function displayGameWord(anyword){
    newWord = new Word(anyword);
    newWord.displayWord();
    count_correct = newWord.letters.length;
}

function promptLetter(){

    //loop until 10 guesses are depleted or word is completed
    if (guessesRemain>0 && count_rem >0){
    inquirer.prompt([
        {
            type: "input",
            name:"guessLetter",
            message: "Guess a Letter!"
        }
    ])
    .then (function(response){
        // console.log("response.guessLetter = " + response.guessLetter);
      
        if(!(newWord.guessCheck(response.guessLetter))){
            // console.log("Entered if on condition that .guessCheck is false.");
            guessesRemain -= 1;
            console.log("\nOOPS! INCORRECT! GUESSES REMAINING: "+ guessesRemain);
        };
    
        newWord.displayWord();
        count_rem = newWord.wordComplete();
        // console.log("Letters left to guess correct: " + count_rem);
        
        promptLetter();
    });
    
    } else{
        if(count_rem === 0){
        console.log("YOU GOT IT! NOW TRY ANOTHER WORD!!");
        }else if(guessesRemain === 0 ){
        console.log("SORRY! NO MORE GUESSES REMAINING!! TRY AGAIN! ");
        }
        guessesRemain = 10;
        count_rem = 30
        gameSequence();
    }
    }

function gameSequence(){

randomWord();

displayGameWord(word);

promptLetter();


}

gameSequence();