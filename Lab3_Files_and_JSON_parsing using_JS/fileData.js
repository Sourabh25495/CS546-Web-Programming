


const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt=bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));


//let fs = require('fs');

module.exports = {
    //Asynchronous function which would return a promise that resolves to a string with contents of the file
    async getFileAsString(path) {
        let pathX = /[a-zA-Z0-9-_\.//]+(.txt)/; //validity for a path/file name
        //let pathX = /[a-zA-Z0-9-_\.//]/; //validity for a path/file name
        
            if (path.match(pathX)) {
                if(!path) {
                    throw "Need to provide a file name!";
                }
                //console.log("About to read " +path);
                let fileContent = await fs.readFileAsync(path, "utf-8");
                //console.log(fileContent);
                return fileContent.toString();
            }
            else {
                console.log("Invalid path");
            }
       
        
        
    },

    async getFileAsJSON(path){
        let pathX=/[a-zA-Z0-9-_\.//]+[a-zA-Z0-9-_\.//]+(.json)/;
        
            if(!path.match(pathX)){
                throw " Invalid Path"
            }
            if (!path){
                throw "File name not provided"
            }
            let fileContent = await fs.readFileAsync(path, "utf-8");
            let x = await JSON.parse(fileContent)
            return x
       
        

    },

    async saveStringToFile(path, text){
        let pathX=/[a-zA-Z0-9-_\.//]+[a-zA-Z0-9-_\.//]+(.txt)/;
        
            if(!path.match(pathX)){
                throw " Invalid Path"
            }
            if (!path){
                throw "File name not provided"
            }
            await fs.writeFileAsync(path, text)
       
        

    },

    async saveJSONToFile(path, obj){
        let pathX=/[a-zA-Z0-9-_\.//]+[a-zA-Z0-9-_\.//]+(.json)/;
        t
            if(!path.match(pathX)){
                throw " Invalid Path"
            }
            if (!path){
                throw "File name not provided"
            }
            let writeData = JSON.stringify(obj);
            await fs.writeFileAsync(path, writeData)
       
       

    }




    }

























































/*
let fileData = exports = module.exports ;


    fileData.getFileAsString =  async function(fileName){ // FUNCTION TO READ DATA FROM A TEXT FILE
        return new Promise(function(resolve,reject){ // PROMISE FUNCTION WHICH WILL RESOLVE IF DATA IS SUCCESSFULLY READ OR REJECT IF ANY ERROR OCCURS 
            if(!fileName){
                 reject("Error : path of file not specified");
            }
            fs.readFile(fileName,"utf-8",function(error,data){
                if(error){ // IF AN NO PATH IS PROVIDED OR FILENAME IS WRONG, REJECT THE PROMISE.
                    reject(error+"Problem while reading file");
                }
               
                resolve(data);
                })
            })
    };

    fileData.getFileAsJSON = function(fileName){ //FUNCTION TO READ DATA FROM A JSON FILE
        return new Promise(function(resolve,reject){//PROMISE FUNCTION WHICH WILL RESOLVE IF DATA IS SUCCESSFULLY READ OR REJECT IF ANY ERROR OCCURS
             if(!fileName){
                 reject("Error : path of file not specified");
             }
             fs.readFile(fileName,"utf-8",function(error,data){
                 if(error){
                     reject(error+" File cannot be read ");
                 }
                 
                 let asObject = JSON.parse(data);//JSON WILL RETURN AN OBJECT TO DISPLAY IT AS A STRING USING JSON.parse TO PRINT STRING.
                 resolve(asObject);//RESOLVING THE PROMISE
             })
            })
     };

     fileData.saveStringToFile = function(fileName,data){ // FUNCTION TO WRITE DATA TO A TEXT FILE
        return new Promise(function(resolve,reject){// PROMISE FUNCTION WHICH WILL RESOLVE IF DATA IS SUCCESSFULLY READ OR REJECT IF ANY ERROR OCCURS
                 if(!fileName){
                     reject("Error : filename not specified");
                 }
                 else if(typeof(data) === 'undefined'){
                     reject("No data to write file");
                 }
             fs.writeFile(fileName,data,function(error){
                 if(error){
                     throw("File cannot be written");// IF AN NO PATH IS PROVIDED OR FILENAME IS WRONG, REJECT THE PROMISE.
                 }
                   resolve(data); // RESOLVING THE PROMISE
             }) // END OF WRITEFILE
         })// END OF PROMISE
     };// END OF saveStringToFile
     

     fileData.saveJSONToFile = function(fileName,obj){ // FUNCTION TO WRITE OBJECT TO A FILE.
        return new Promise(function(resolve,reject){// PROMISE FUNCTION WHICH WILL RESOLVE IF DATA IS SUCCESSFULLY READ OR REJECT IF ANY ERROR OCCURS
             let writeData = JSON.stringify(obj);
             fs.writeFile(fileName,writeData,function(error){
                 if(error){
                     reject(error); // IF AN NO PATH IS PROVIDED OR FILENAME IS WRONG, REJECT THE PROMISE.
                 }
                 
              resolve(writeData); // RESOLVING THE PROMISE
             }) // END OF WRITEFILE
         }) // END OF PROMISE
     }; // END OF saveJSONToFile
   */







   
  
  