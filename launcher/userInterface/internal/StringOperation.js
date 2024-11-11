// Import Modules:
import TypeValidation from "#internal/TypeValidation";
//---------------- //
// Exported Functions for use in package: 
// -------------------------------------- //
// charEvenString: Takes a specific character and a number then returns a string of the character repeated as many times as the number
// ----------------------------------------------------------------------------------------------------------------------------------- //
/** Returns a string with character repeated for specified length. @param {number} length - Length of string. @param {string} character - Character to repeat. @returns {string} Generated string. */
export const charEvenString=(length,character)=>{let output_string=new String();
    if(!checkLength(character,1)){throw new Error(`Invalid Parameter: Please specify only a 1 character string for this function.`)}
    else{length=TypeValidation.numberCheck(length,TypeValidation.type_integer),character=TypeValidation.typeCheck(character,String)};
    if(length%2!=0){length--,console.log(`Warning: This function returns even strings, length will be ${length}.`)};
    for(let i=0;i<length;i++){output_string+=character}return output_string}
// -------------------------------------------------------------------------------------------------------------------------------- //
// checkLength: Takes a string and an integer then returns true if length of string matches the integer, otherwise false
// --------------------------------------------------------------------------------------------------------------------- //
/** Checks if a string's length matches specified length. @param {string} string - String to check. @param {number} length - Expected length. @returns {boolean} True if lengths match. */
export const checkLength=(string,length)=>{if(string.length==length){return true}else{return false}}
// ---------------------------------------------------------------------------------------------------------------------- //
// halfString: Takes a string and returns two strings for front and back hald, if odd a third string for middle character
// ---------------------------------------------------------------------------------------------------------------------- //
/** Splits a string into two halves, with a middle character if odd-length. @param {string} string - String to split. @returns {Object} Object containing front, back, and middle (if applicable). */
export const halfString=(string)=>{let whole=TypeValidation.typeCheck(string,String),front,back,mid=null;
    front=whole.slice(0,whole.length/2),back=whole.slice(whole.length/2,whole.length);
    if(oddLength(string)){mid=whole.charAt(whole.length/2),back=back.slice(1)};
    return {back,front,mid}}; 
// ----------------------------------------------------------------------------------------------------------------------- //
// oddLength: Function that takes a string and returns true if the length is a odd number
// -------------------------------------------------------------------------------------- //
/** Checks if string length is odd. @param {string} string - String to check. @returns {boolean} True if length is odd. */
export const oddLength=(string)=>{if(TypeValidation.typeCheck(string,String).length%2!=0){return true}else{return false}};
// --------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------- //
/*  padString: Takes a string, desired length and padding character aswell as optional casing string and returns the string with 
    the padding and casing of the specified length: */
// ----------------------------------------------------------------------------------------------------------------------------- //
/** Pads a string with specified characters and encasing. @param {number} length - Length of padded string. @param {string} padChar - Padding character. @param {string} title - Title text. @param {string} [encasing="[]"] - Encasing characters. @returns {string} Padded string. */
export const padString=(length,padChar,title,encasing="[]")=>{length=TypeValidation.numberCheck(length,TypeValidation.type_integer);      
    padChar=TypeValidation.stringCheck(padChar,1);                              
    title=TypeValidation.typeCheck(title,String);                                  
    encasing=TypeValidation.stringCheck(encasing,2);                
    let split_title=halfString(title);               
    let base_header=charEvenString(length/2,padChar).slice(0,0-(split_title.front.length));
    let heading='';
    if(title.length%2!=0){heading=base_header.slice(0,-1)+encasing[0]+split_title.front+split_title.mid+split_title.back+encasing[1]+base_header}
    else{heading=base_header+encasing[0]+split_title.front+split_title.back+encasing[1]+base_header};
    return heading};
// ------------------------------------------------------------------------------------------------------------------------------ //
// -------------------------------------- //
// Export module as object:
// ------------------------ //
export default{charEvenString,checkLength,halfString,oddLength,padString}
// ------------------------ //
