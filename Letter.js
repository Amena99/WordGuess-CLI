var inquirer = require("inquirer");

// var letter = "r";

var Letter = function(letter, checker){
    this.letter = letter;
    this.checker = checker;
}

Letter.prototype.checkLetter = function(uletter){
    if(this.letter===uletter){
        console.log("true");
        return true;
    }else{
        console.log("false");
        return false;
    }
};

Letter.prototype.displayLetter = function(instance, lttr) {
    if(instance.checkLetter(lttr)){
        console.log(instance.letter);
    }else{
        console.log(" - ");
    }
}


// inquirer.prompt([
//     {
//         name: "letter",
//         message: "What is the letter to look up?",
//         type: "input"
//     }
// ]).then(function(answers){
//     var newLetter = new Letter("t", true);
//     console.log(newLetter.letter +"+"+ newLetter.checker);
//     let inputLetter = answers.letter;
//     console.log("inputLetter = "+ inputLetter);
//     newLetter.checkLetter(inputLetter);
//     newLetter.displayLetter(newLetter, inputLetter);
// });
module.exports = Letter;