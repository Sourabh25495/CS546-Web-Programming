(function() {
    

      var a = document.getElementById("staticForm")
      var input = document.getElementById("palindrome");
      document.getElementById("error").style.visibility = "hidden";
      document.getElementById("output").style.visibility = "hidden";
      document.getElementById("output1").style.visibility = "hidden";
      var palindrome = []
      var not_palindrome = []
      flag = true;
      //document.getElementById("output").innerHTML = input;
      a.addEventListener("submit",(event) => {
        event.preventDefault();
        
        var result = isPalindrome(input.value);
        console.log(result);

        if(result)
        {
          palindrome.push(input.value);
          document.getElementById("valid").innerHTML = "";
          for(var i = 0; i < palindrome.length; i++)
          {
            list = "<li>"+palindrome[i]+"</li>";
            document.getElementById("valid").innerHTML += list;
          }
          document.getElementById("output1").style.visibility = "hidden";
          document.getElementById("output").style.visibility = "visible";
          document.getElementById("output").innerHTML = "Is a palindrome";
        }
        else
        {
          not_palindrome.push(input.value);
          document.getElementById("invalid").innerHTML = "";
          for(var i = 0; i < not_palindrome.length; i++)
          {
            invalid_list = "<li>"+not_palindrome[i]+"</li>";
            document.getElementById("invalid").innerHTML += invalid_list;
          }
          document.getElementById("output").style.visibility = "hidden";
          document.getElementById("output1").style.visibility = "visible";
          document.getElementById("output1").innerHTML = "Not a palindrome";
        }
       
        
      })

      function isPalindrome(str)
      {
         let inputString = (str).toLowerCase();     // take input from editText on browser
         inputString = inputString.replace(/\W/g, '');
         //inputString = inputString.replace(/  +/g, '');
         console.log(inputString)
        if (typeof str !== "string") 
        {
          document.getElementById("output").style.visibility = "hidden";
          document.getElementById("output1").style.visibility = "hidden";
           document.getElementById("error").style.visibility = "visible";
           document.getElementById("error").innerHTML = "Must provide a number";
            throw "Must provide a number";
        }
        else if (str == null) 
        {
          document.getElementById("output").style.visibility = "hidden";
          document.getElementById("output1").style.visibility = "hidden";
            document.getElementById("error").style.visibility = "visible";
            document.getElementById("error").innerHTML = "Must provide a string";
            throw "Must provide a string";
        }
        else if(str.length == 0){
          document.getElementById("output").style.visibility = "hidden";
          document.getElementById("output1").style.visibility = "hidden";
            document.getElementById("error").style.visibility = "visible";
            document.getElementById("error").innerHTML = "Please provide input";
            throw "Please provide input"
        }
        else
        {
          
          var len = str.length;
          
          document.getElementById("error").style.visibility = "hidden";

          //for(let i =0; i< Math.floor(len/2); i++){
              if(inputString === inputString.split('').reverse().join('')){
                  
                  return true;
              }else{
         // }
         
          return false;
              }
        }
        
      }
    
})();
  