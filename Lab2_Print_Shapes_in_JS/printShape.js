console.log(exports===module.exports)
module.exports={
triangle: function(n){
    try{
    if(typeof(n) != 'number') // checking whether the input is always a number.
    {
            throw("Please entr valid Input")
            
    }else{          // prints the triangle
    for(i=0;i<n;i++){
        var arr=[] 
        for(j=0;j<2*n;j++){
           
            if(j==n-1-i){
                arr.push("/")
            }
            else if(j==n+i){
                arr.push("\\")
            }
            else if(i==n-1){
                if(j==0){
                    arr.push("/")
                }
                else if(j==2*n-1){
                    arr.push("\\")
                }
                else{
                    arr.push("-")
                }
            }
            else{
                arr.push(" ")
            }
            }
           //arr=arr.join(",")
           //arr = arr.split(",");
    
            console.log(arr.join(""))
        }
    }
}catch(e){
    confirm.apply(e)
}
    

},


    description: "This is assignment 2 CS 546",
    square: function (n){                           //prints the square
      try{
        if(typeof(n) != 'number') // checking whether the input is always a number.
        {
                throw("Please entr valid Input")
                
        }else{ 
          
        for(i=0;i<n;i++){
            var arr1=[] 
            for(j=0;j<n+2;j++){
            if(i==0|| i==n-1){
                if(j==0||j==n+1){
                    arr1.push("|")
                }else{
                    arr1.push("-")
                }
            }else{
                if(j==0||j==n+1){
                    arr1.push("|")
                }else{
                    arr1.push(" ")
                }
            } 
            }
            console.log(arr1.join(""))
        }
    }
  }catch(e){
    console.log(e)
}
    
    
       },

    rhombus:function (n){
        if(typeof(n) != 'number') // checking whether the input is always a number.
        {
                throw("Please entr valid Input")
                
        }
       
        else{       // execute rhombus function
        while(n<=20){  // this loop will increment the size of rhombus
            try{
            if(n%2==0){  //only for even numbers
            for(i=1;i<=n/2;i++){        // upper half
                var arr=[] 
                for(j=1;j<=n+1;j++){
                   
                    if(j==n/2+1&& i==1){
                        arr.push("-")
                    }
                    else if(j==n/2+1+i){
                        arr.push("\\")
                    } else if(j==n/2+1-i){
                        arr.push("/")
                    }
                    else{
                        arr.push(" ")
                    }
                    }
                 
            
                    console.log(arr.join(""))
                }
            
                for(i=n/2;i>=1;i--){            //Lower half
                    var arr=[] 
                    for(j=1;j<=n+1;j++){
                      
                        if(j==n/2+1&& i==1){
                            arr.push("-")
                        }
                        else if(j==n/2+1+i){
                            arr.push("/")
                        } else if(j==n/2+1-i){
                            arr.push("\\")
                        }
                        else{
                            arr.push(" ")
                        }
                        }
                     
                
                        console.log(arr.join(""))
                    }
            
                    console.log()
                }else{
                    throw("Rhombus is printed only for even numbers. "+n+" is not even")   // op for odd numbers of input
                    
                }
            }catch(e){
                console.log(e)
            }
                    
                   n++
                  
                 
        }

               
            }
        }

};
