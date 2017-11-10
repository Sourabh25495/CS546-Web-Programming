let fs = require('fs'); // FILE SYSTEM MODULE TO PERFORM READ WRITE OPERATION ON FILES
let fileModule = require('./fileData');
let metrix = require('./createMetrix');
let Tmetrix = require('./textMatric');
let simplifyText=require('./simplify')

let metricsData = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";

matData="Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"
output=simplifyText.simplify(matData)
output=matData.replace(/\s\s+/g, ' ')
console.log(output)
output=metrix.createMetrics(output);

console.log(output)
console.log("-----------------------------------------------------------------------------------------")





var c="chapter1.txt"
var d="chapter2.txt"
var e="chapter3.txt"

async function getFileName(filename){
try{
    if(!filename){
        throw "File name doesnot exists"
    }
    try{
        let stats=await fs.statAsync(filename)
        return stats.isFile();
    }catch(e){
        console.log("file doesnot exists")
        return false;
    }
}catch(e){
    console.log(e)
}
    
}


async function main(x){

    let breakIt=[];
    breakIt=x.split(".")
    //console.log(breakIt)
    let nameOFJson='./'+breakIt[0]+'.result.json'
    //console.log(nameOFJson)
    let nameOFDebug='./'+breakIt[0]+'.debug.txt'
try{
    let status= await getFileName(nameOFJson)
    if(status== false){

              console.log("Creating "+nameOFJson)
              let chp=   await fileModule.getFileAsString(x)
              let simpleText = simplifyText.simplify(chp);
                //console.log(simpleText)
                await fileModule.saveStringToFile(nameOFDebug,simpleText);
                let simpleTextInFile = await fileModule.getFileAsString(nameOFDebug);
                let simpleMetrics = Tmetrix.textMatric(simpleTextInFile);
                //console.log(simpleMetrics)
                await fileModule.saveJSONToFile(nameOFJson,simpleMetrics);
                let finaloutput = await fileModule.getFileAsJSON(nameOFJson)

                console.log(finaloutput)
                console.log("-----------------------------------------------------------------------------------------")
    }else{
                console.log(nameOFJson+" already exists")
                let finaloutput = await fileModule.getFileAsJSON(nameOFJson)
        
                console.log(finaloutput)
                console.log("-----------------------------------------------------------------------------------------")
    }
}catch(e){
    console.log(e);
}

       
}
    try{
        main(c)
        main(d)
        main(e)
    }catch(e){
        console.log(e)

    }









