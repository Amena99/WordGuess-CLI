// var inquirer = require("inquirer");
var Letter = require("./Letter.js");
var counter;
// var newLetterObject;
//constructors should not have dependency on global scope vars

function Word(word){
    this.word = word;
    this.letters = [];
    
    //split the word into an array of letters 
    const wordLetters = this.word.split("");

    for(let i =0; i<wordLetters.length; i++){

        //iterate through the array of letters to index of each letter
        const singleLetter= wordLetters[i];
        
        //make each letter an instance of the object "Letter" using constructor
        const newLetterObject = new Letter(singleLetter);
        
        //push each "Letter" object into the array this.letters
        this.letters.push(newLetterObject);
    }
    this.lettersRem = this.letters.length;
}

Word.prototype.guessCheck = function(inputLetter){
    var verify = false;
    //iterate through all the "Letter" objects in this.letters and check 
    //to see if they are correct. Use "Letter" obj method .checkLetter
    for(i=0; i<this.letters.length; i++){
    
    //Note: For the below "IF": We don't want to run the function .checkLetter() on the letters that have 
    //already been guessed because then .checkLetter() will return the value "true"
    //for those letters' .guessed property and then this function will always return 
    //"true". Basically we only want to deal with letters that haven't been guessed.
    // if (this.letters[i].guessed === false){
        // console.log("this.letters[i].checkLetter(inputLetter) inside .guessCheck = " + 
        // this.letters[i].checkLetter(inputLetter));
        //.checkLetter returns true or false for each letter 
      
        // if statement below makes the variable verify = true if inputLetter matches 
        //atleast one letter in Word object. 
        if (this.letters[i].checkLetter(inputLetter)){
           verify = true;
       }
    // }
    }    
    
    //will return true if input matches at least one letter 
    return verify;
}

Word.prototype.displayWord = function(){

    let empString = "";

    for(i=0; i<this.letters.length; i++){
    //    empString = empString.concat(this.letters[i].displayLetter() + " ");
       empString += this.letters[i].displayLetter() + " "
     }
     console.log("\n    " + empString + "\n");
}

Word.prototype.wordComplete = function(){
let counter = 0;
    for (i=0; i<this.letters.length; i++){
        if(this.letters[i].guessed === false){
            counter++;
        }
    }
    return counter;
}


// var newWordx = new Word("bubble");
// console.log(newWordx.wordComplete("l"));

module.exports = Word;
