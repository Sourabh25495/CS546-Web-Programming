
let simplifyText = exports = module.exports;



simplifyText.simplify = function(data)
{
 ifResolved=data
 ifResolved = ifResolved.toLowerCase()  // CONVERT TO LOWER CASE
 
 ifResolved=ifResolved.replace(/[^0-9a-z\t]/gi, ' ');  //REMOVE NON ALPHANUMERICALS
 ifResolved=ifResolved.replace(/  +/g, ' ');    //CONVERT MULTIPLE SPACES TO SINGULAR SPACE
 //console.log(ifResolved)

 return ifResolved



}