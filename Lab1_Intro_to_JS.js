console.log("LAB 1")
console.log("Program 1")
var num1=2;
var num2=3;
var num3= 5;
function sumOfSquares(num1, num2, num3){
try{
if(typeof(num1) === 'number' && typeof(num2)==='number' && typeof(num3)==='number'){
  sum=Math.pow(num1,2)+Math.pow(num2,2)+Math.pow(num3,2) //Calculate sum of squars
  return sum;  //return the final answer
}
else
{
  throw("Enter a valid input")
}
}catch(e){
  console.log(e);
}
}
ans=sumOfSquares(num1, num2, num3)     //store the ans from the function in a variable
console.log("The final ans is "+ ans )   // Display the final ans






console.log("***********************************************************")
console.log(" ")
console.log("LAB 1")
console.log("Program 2")




function sayHelloTo(firstName, lastName, title){
 if(typeof(firstName) && typeof(lastName) && typeof(title)!='undefiened'&& typeof(firstName)=='string'&& typeof(lastName)=='string'&& typeof(title)=='string'){
    return "Hello "+title+" "+firstName+" "+lastName+"! Have a good evening"
 }else if(typeof(firstName) && typeof(lastName)!= 'undefined' && typeof(firstName) =='string' && typeof(lastName) ==='string'){
    return "Hello "+ firstName +" "+ lastName+" "+" I hope you are having a nice day"
 }else if(typeof(firstName)!='undefined' && typeof(firstName) == 'string'){
   return "Hello "+firstName
 }else
 { 
   return "Enter a name";
 }
}
let a=sayHelloTo()
console.log(a);
let b=sayHelloTo("Sourabh")  //1 parameter
console.log(b);
let c=sayHelloTo("Sourabh", "Kulkarni")    // 2 parameter
console.log(c);
let d=sayHelloTo("Sourabh", "kulkarni", "Mr")       // 3 parameter
console.log(d);




console.log("***********************************************************")
console.log(" ")
console.log("LAB 1")
console.log("Program 3")

let word = "cups"
function cupsOfCoffee(cups){
  
		if(typeof(cups) != 'number' ) // checking whether the input is always a number.
		{
			throw("Please enter number of cups"); 	
		}
		else if(cups<=0) // checking whether input is always greater than 0.
		{
			throw("Number of coffee cups cannot be less than 0");
		}
		else{
  while(cups>0){
    if(cups==1){
      word="cup";  // only one cup to avoid grammatical error
    }
    console.log(`${cups} ${word} of coffee on the desk! ${cups} ${word} of coffee!`);

    cups--;
    if(cups==1){
      word="cup";
    }
 
    if(cups>=1)
      {
        console.log(`Pick one up, drink the cup, ${cups} ${word} of coffee on the desk!`);
      }
      else
      {
        console.log(`Pick it up, drink the cup, no more coffee left on the desk`);
      }
  }
}
 
}
var numberOfCups=9;
cupsOfCoffee(numberOfCups);

 





console.log("***********************************************************")
console.log(" ")
console.log("LAB 1")
console.log("Program 4")

var s="helllllllo world";
var s1="hello"
var subString="ll"


function occurrencesOfSubstring(str, search){
  counter=0;
  indx=0
  if(typeof str!='string'){
    throw("please enter string")

  }
  else if(str.length==0&&search.length==0){
    throw("enter a non 0 length string")
  }else{
    for(var i=0;i<str.length;i++){ ///to parse through the entire string in search of given sub string.
      indx=str.indexOf(search,indx) // returning the index of substring.
        if(indx>=0){
          indx++    /// incrementing the index to search for other ocurrences of substring.
          counter++  // increment the counter
        }
        else{
        break;
        }
     }
     return  counter
  }
}

 result=occurrencesOfSubstring(s,"o")
 result1=occurrencesOfSubstring(s1,subString)
 console.log("total number of occurrence of substring 'll' in 'helllllllo are "+result)
 console.log("total number of occurrence of substring 'll' in 'helllllllo are "+result1)
 






 console.log("***********************************************************")
 console.log(" ")
 console.log("LAB 1")
 console.log("Program 5")



 var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
 console.log("Original Paragraph : ");
 console.log(paragraph);
 console.log();

 function randomizeSentences(p){
  if(typeof p != 'string') // checking whether the input is always a string.
		{
			throw("Please enter a string paragraph");
		}
		else if(p.length == 0) // checking whether the paragraph has atleast one sentence.
		{
			throw("Paragraph cannot be blank");
		}
		else if(p.length == 1)
		{
			throw("Cannot shuffle. Paragraph contains only one word");
		}else{
  var array = p.match(/[^\.!\?]+[\.!\?]+/g); //splitting the paragraph on periods,exclamation and question marks.
  

  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex){

    randomIndex = Math.floor(Math.random() * currentIndex); //get a random number and this will be the index
    currentIndex -= 1;
    temporaryValue = array[currentIndex];  // store current index and shuffle it with the previous value
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }
  array=array.join() // convert it in a paragraph format
  return array   // return the paragraph

 }
}
 arrayFinal=randomizeSentences(paragraph)
 console.log(arrayFinal)




 

  





















