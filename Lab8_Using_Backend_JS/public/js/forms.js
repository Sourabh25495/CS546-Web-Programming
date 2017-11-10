/*(function() {
    const palindromeMethods = {
     
  
        palindrome(str){
            if (typeof str !== "string") throw "Must provide a number";
            if (isNaN(str)) throw "Must provide a string";
            var len = str.length;
            console.log(len);
            for(let i =0; i< Math.floor(len/2); i++){
                if(str[i] != str[len-1-i]){
                    return false;
                }
            }
            return true;
    
        }
  
      

    };
  
    
  
    const staticForm = document.getElementById("static-form");
  
    if (staticForm) {

      const firstElement = document.getElementById("palindrome");
      
  
      const errorContainer = document.getElementById("error-container");
      const errorTextElement = errorContainer.getElementsByClassName(
        "text-goes-here"
      )[0];
  
      const resultContainer = document.getElementById("result-container");
      const resultTextElement = resultContainer.getElementsByClassName(
        "text-goes-here"
      )[0];
  

      staticForm.addEventListener("submit", event => {
        event.preventDefault();
  
        try {
         
          errorContainer.classList.add("hidden");
          resultContainer.classList.add("hidden");
  
          
          const firstValue = firstElement.value;
         
  
          const parsedFirstValue = parseInt(firstValue);
 
  
          const result = operation(
            parsedFirstValue,
           
          );
          resultTextElement.textContent = "The result is " + result;
          resultContainer.classList.remove("hidden");
        } catch (e) {
          const message = typeof e === "string" ? e : e.message;
          errorTextElement.textContent = e;
          errorContainer.classList.remove("hidden");
        }
      });
    }
  })();
  */