var inquirer = require("inquirer");
var Letter = require("./Letter.js");

function Word(letterArr, word){
    this.letterArr = letterArr;
    this.word = word;
}
 
Word.prototype.createLetterArray = function(){
    let wordLetters = this.word.split("");
    return wordLetters;
}

Word.prototype.createWordArray = function(){
    for(i =0; i<(this.createLetterArray()).length; i++){
        let singleLetter= this.createLetterArray()[i];
        var newLetterObject = new Letter(singleLetter, true);
        console.log(newLetterObject.letter);
        this.letterArr.push(newLetterObject);
    }
    console.log(this.letterArr);
}

Word.prototype.checkLArr = function(){
    this.createWordArray();
    for(i=0; i<this.letterArr.length; i++){
       this.letterArr[i].checkLetter(this.letterArr[i].letter); 
    }
    
}
var newArr = [];
var newWord = new Word(newArr, "bike");
// console.log(newWord.createLetterArray());
// newWord.createWordArray();
newWord.checkLArr();