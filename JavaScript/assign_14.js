"use strict"
/* Removing Html and Xml tag and return remaining string*/
function removeHtmlXmlTag(htmlString,regex) {
     let tagFreeString = htmlString.replace(regex,"");       //replace tag with blank string
     return tagFreeString;

}



let htmlString = "<p><strong><em> JavaScriptExercises </em></strong></p>";
let regex = /<\/?([a-z]{1}[a-z0-9]{0,}>)/gi ;                   //regex expression to search Html Xml tag.

let tagFreeString = removeHtmlXmlTag(htmlString,regex);
console.log(tagFreeString);