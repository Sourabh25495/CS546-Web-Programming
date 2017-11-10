



let exportedMethods = {
    palindrome(str){
        
        if (typeof str !== "string") 
        {
            throw "Must provide a number";
        }
        else if (str == null) 
        {
            throw "Must provide a string";
        }
        else if(str.length == 0){
            throw "Please provide input"
        }
        else{
            var len = str.length;
            //console.log(str);
            //console.log(len);
            for(let i =0; i< Math.floor(len/2); i++){
                if(str[i] != str[len-1-i]){
                    
                    return false;
                }
            }
           
            return true;

    }
}

}

module.exports = exportedMethods;