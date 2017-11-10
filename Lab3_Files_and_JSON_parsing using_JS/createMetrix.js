
let metrics = exports = module.exports; // MODULE EXPORTED TO APP.JS

metrics.createMetrics = function(data) // FUNCTION TO FIND NUMBER OF WORDS,LETTERS,UNIQUE WORDS ETC....
{
    try
    {
        if(data === 'undefined')
        {
            throw "No Parameter Passed";
        }
        else if(typeof data !== 'string')
        {
            throw "Input must be a string";
        }
        else if(data.length == 0)
        {
            throw "sorry string found with no words";
        }
    }
    catch(exception)
    {
        console.log(exception)
    }
    data = data.toLowerCase()
    //console.log(data);
    /*
    data = data.toLowerCase()
    data=data.replace(/[^0-9a-z]/gi, '');
    */

let numberOfWords = data.split(/[-,.!? ]+/g); // split THE INPUT STRING ON , ! ? SPACES ETC...
//let lastItem = numberOfWords.pop(); // TO REMOVE THE LAST BLANK ELEMENT GENERATED BECAUSE OF SPLIT ON LAST PERIOD.
//console.log(numberOfWords);

let noOfLetters = data.replace(/[-.!, ]/g,""); // REMOVING ALL THE BLANK SPACES FROM THE STRING TO CALCULATE TOTAL NUMBER OF LETTERS.
//console.log(noOfLetters);

let uniqueWords =   [];
for(let i=0;i<numberOfWords.length;i++)
{
    if(!uniqueWords.includes(numberOfWords[i]))//IF ELEMENT IN UNIQUE WORDS ARRAY DOES NOT CONTAIN ELEMENT FROM THE STRING 
    {
        uniqueWords.push(numberOfWords[i]);//PUSH THAT ELEMENT IN TO THE UNIQUE ARRAY THUS ELEMENATING THE POSSIBILITES OF DUPLICATES AND RETURINING UNIQUE WORDS FROM THE STRING.
    }
}
//console.log(uniqueWords);

let longWords = [];
for(let i=0;i<numberOfWords.length;i++)
{
    if(numberOfWords[i].length>=6)// CHECKING WHETHER EACH WORD FROM THE STRING IS MORE THAN OR EQUAL TO 6 CHARACTERS LONG.
    {
        longWords.push(numberOfWords[i]);
    }
}

let averageWorldLength = noOfLetters.length/numberOfWords.length;// CALCULATING THE AVERAGE

let numberOfSentences = data.split(/[.!?]+/g); // TO DETERMINE NUMBER OF SENTENCES, SPLITING THE STRING ON PUNCTUATION LIKE PERIOD EXCLAMATION AND QUESTION MARKS THAT USUALLY TERMINATE A SENTENCE.
let l = numberOfSentences.pop();

let textComplexity = numberOfWords.length/numberOfSentences.length + (longWords.length * 100)/numberOfWords.length;


let wordOcurrences = {}; // AN OBJECT TO STORE ALL THE WORDS AND THEIR OCURRENCES.
for(let  i = 0 ; i<numberOfWords.length; i++)
{
    if(!wordOcurrences.hasOwnProperty(numberOfWords[i])) 
    {
        wordOcurrences[numberOfWords[i]] = 1;
    }
    else
    {
        ++wordOcurrences[numberOfWords[i]];
    }
}

let obj = {
    "Number of letters " : noOfLetters.length,
    "Number of words " : numberOfWords.length,
    "Unique Words " : uniqueWords.length,
    "Long Words" : longWords.length,
    "Average word length" : averageWorldLength,
    "Number of Sentences" : numberOfSentences.length,
    "Text Complexity" : textComplexity,
    "Word Occurrences" : wordOcurrences
}

return obj;

}











