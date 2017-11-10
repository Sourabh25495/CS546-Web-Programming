const printShape= require("./printShape");

console.log("CS546 Assignmet 2")
console.log()
for(i=1;i<=10;i+=1){
printShape.triangle(i)//  //calls the triangle function
console.log()
}

//console.log()
for(i=3;i<=12;i+=1){
printShape.square(i)  //calls the square function
console.log()
}
console.log()


printShape.rhombus(3)  // calls rhombus function . Also sizing of each rhombus is incorporated in the function

console.log("Thank you!")






















/*
const prompt=require("prompt")

function getInfo(){
    prompt.start();
    console.log("test")

    const operation={
        
            description: 'Which operation do you want to do?',     // Prompt displayed to the user. If not supplied name will be used.
            type: 'string',                 // Specify the type of input to expect.
            pattern: /^\w+$/,                  // Regular expression that input must be valid against.
                                    // If true, characters entered will either not be output to console or will be outputed using the `replace` string.
            replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string.
            default: 'add',             // Default value to use if no value is entered.
            required: true                        // If true, value entered must be non-empty.
           // before: function(value) { return 'v' + value; } // Runs before node-prompt callbacks. It modifies user's input
          
    };

    prompt.get([operation, 'email'], function (err, result) {
        // 
        // Log the results. 
        // 
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  email: ' + result.email);

        getInfo()
      });
    }
    getInfo()
    */
