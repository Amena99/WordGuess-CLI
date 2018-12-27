var inquirer = require("inquirer");
var Word = require("./Word.js");
var Movie = require("./Letter.js")
var word = "";
var counter;
var guessesRemain = 10;
var newWord;
var count_correct;
var wordsArray = ["sunshine", "mountains", "treetops", "grasslands", "meadows"];

function randomWord(){
    let index = Math.floor((Math.random() * 4)+0);
    console.log(index);
    word = wordsArray[index];
    
    // console.log(word);
    return word;
}

function displayGameWord(anyword){
    newWord = new Word(anyword);
    newWord.displayWord();
    count_correct = newWord.wordComplete();
}

function promptLetter(){

    //loop until 10 guesses are depleted or word is completed
    if (guessesRemain>0 && count_correct>0){
    inquirer.prompt([
        {
            type: "input",
            name:"guessLetter",
            message: "Guess a Letter!"
        }
    ])
    .then (function(response){
        
        if(!(newWord.guessCheck(response.guessLetter))){
            guessesRemain -= 1;
        };
    
        newWord.displayWord();
        count_correct = newWord.wordComplete();
        console.log("Letters left to guess correct: " + count_correct);
        console.log("you have this many guesses left: "+ guessesRemain);
        promptLetter();
    });
    
    }
    }

function gameSequence(){

randomWord();

displayGameWord(word);

promptLetter();
}

gameSequence();