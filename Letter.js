
var Letter = function(letter){
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.checkLetter = function(uletter){
    if (this.guessed===false){
        if(this.letter===uletter){
            this.guessed = true;
        }else{
            this.guessed = false;
        }
       
    }
    return this.guessed;   
};

Letter.prototype.displayLetter = function() {
    
    if(!(this.guessed)){
        return "_";
    }
   return this.letter;
}

    // var newLetter = new Letter("i");
    // newLetter.checkLetter("q");
    // console.log(newLetter.displayLetter());


module.exports = Letter;