class LoveCalculator {
    constructor(params) {
        //the names from the UI are joined and stored in the nameArray
        this.namesArray = [...params.firstName,...'loves',...params.secondName];
        this.combinations = [];
        this.existingCharacters = [];
        this.hasRemainder = false;
    }

    //this is the function I call to kickoff the calculation
    calculateLovePercentage() {
        for (let i = 0; i <this.namesArray.length; i++){
            if(!this.existingCharacters.includes(this.namesArray[i])){ //if character has been found and is in the existing character array I don't iterate again
                this.findCharacterOccurrence(this.namesArray,this.namesArray[i]);
            }
        };
    
        var values = this.combinations;
        let combinationsList = [];
        //I loop through all the possible numbers
        for (let index = 0; index < this.combinations.length; index++) {
            combinationsList = [];
            if(this.combinations.length>0){
                combinationsList = this.getPercentage(values);
                if(combinationsList.length<=2){ // once I only have 2 numbers in the array I join them and get my percentage
                    return combinationsList.join("");
                }
    
                values = combinationsList;
            };
        }
    };
    
    //this is used to find the number of times a character occurs in both names and 'loves'
    findCharacterOccurrence(items, letter) {
        let counter = 0
        for (let i = 0; i < items.length; i++){
            if (items[i] == letter)    
            {
                //everytime I get a new character I add it to the existing character array but carry on counting if theres more occurrences
                if(counter==0){
                    this.existingCharacters.push(items[i]);
                }
                counter ++;
            }
        };
    
        //push to the combinations array once done counting
        if(counter>0){
            this.combinations.push(counter);
        }
    };
    
    getPercentage(values) {
        let total = [];
    
        //i check whether there will be a number that won't be combined with any and if so I just add that number to the array later
        this.hasRemainder = values.length/2 % 2 ==1 ? false:true;
    
        for (let index = 1; index < values.length; index++) {
            if(index<=Math.floor(values.length/2)){
                //i start adding numbers by adding the first and last number each time I get here
                let sum = this.getSumOfFirstAndLastIndex(index-1, values.length - index, values);
                if(sum>=10){ //if the sum is greater than 10, I spilt and push both into array as I require 1 character numbers
                    sum.toString().split('').map(iNum => total.push(parseInt(iNum)))
                }else{
                    total.push(sum)
                }
            }
        }
    
        if(this.hasRemainder){
            //if there a remainder I just push it to the array
            total.push(values[Math.floor(values.length/2)])
        }
        return total;
    }
    
    //basic calc for adding the 2 numbers
    getSumOfFirstAndLastIndex(first, last, values) {
        return values[first] + values[last];
    }
}
  
module.exports = { LoveCalculator };