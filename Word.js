// var inquirer = require("inquirer");
var Letter = require("./Letter.js");

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
}

Word.prototype.guessCheck = function(inputLetter){
    var verify = false;
    //iterate through all the "Letter" objects in this.letters and check 
    //to see if they are correct. Use "Letter" obj method .checkLetter
    for(i=0; i<this.letters.length; i++){

        //.checkLetter returns true or false for each letter
       this.letters[i].checkLetter(inputLetter); 
       

       if (this.letters[i].checkLetter(inputLetter)){
           verify = true;
       }

    }
        return verify;
}

Word.prototype.displayWord = function(){

    let empString = "";
    
    for(i=0; i<this.letters.length; i++){
    //    empString = empString.concat(this.letters[i].displayLetter() + " ");
       empString += this.letters[i].displayLetter() + " "
     }
     console.log("empString var = " + empString);
}

Word.prototype.wordComplete = function(){
    let counter = this.letters.length;

    for (i=0; i<this.letters.length; i++){
        
        if (this.letters[i].guessed === true){
           
            counter -= 1;
           
        }
    }
    
    return counter;
}


// var newWordx = new Word("bubble");
// console.log(newWordx.wordComplete());

module.exports = Word;
