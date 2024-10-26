/*  [Operation string-operations]
    Situation: The code in the Display class methods is long and messy, it needs
        to be tied up. We are here to ensure that any operations on string data
        typed are easier to deploy and use, around us we have import mismatches that will affect 
        Further operations. Consider that this must be used in any and all class methods <= 3rd This is what I consider when designing solution
    Mission: Create the nessicary organised code for this internal package  in this file so
        that we do not need to rewrite these functions again and can import them from the package. <= 4th All my actions should bring me closer to this
    Execution: <=6th I read this and at each point I plan based on 2nd points used for
              |  |    3rd point ensuring that this brings me close to 4th point by keeping 5th in mind
              V V       
        -   Two functions will be created, one to half a string, 
        -   one to insert a string with padding and encasing character each. 
        -   The encasing character should be factored in, each message must be 64 characters long.
        -   odd number cases the string should remove the front half of padding over the back.
    Assistance:<= 2nd I test these all function
        - function to take a string and surround it in padding with encasing characters that are optional is coded in Menu.js
        - function to create the base header string out of given characters comes from string-operations module
        - function to half a string but in cases of odd return a middle character value is coded similarlu in Display.js
        - function to determine if a string is odd or even in length we know number%2==0 is true if even number.
        - Require support via a new function in type-validatioin package that can create a long string of single characters <= I'd do this first
    Communications: <= 5th use this to know which way it is best to be done
        - All functions to be exportable if they help the additional scripts too
        - Register exports and update package.json to reference this file
        - Run in testbench.js to confirm is donee
        - An AI bot can give quick reminders on pre-built syntac constructs. */
import typeValidation from "#internal/type-validation";



// charEvenString: Takes a specific character and a number then returns a string of the character repeated as many times as the number:
// -------------------------------------------------------------------------------------------------------------------------------- //
export const charEvenString=(length,character) =>{let output_string=new String();
    if(!checkLength(character,1)){throw new Error(`Invalid Parameter: Please specify only a 1 character string for this function`)}
    else{length=typeValidation.numberCheck(length,typeValidation.type_integer),character=typeValidation.typeCheck(character, String)};
    if(length%2!=0){length--,console.log(`Warning: This function returns even strings, length will be ${length}`)};
    for(let i=0;i<length;i++){output_string+=character}return output_string}
// -------------------------------------------------------------------------------------------------------------------------------- //
// checkLength: Takes a string and an integer then returns true if length of string matches the integer, otherwise false.
// ---------------------------------------------------------------------------------------------------------------------- //
export const checkLength=(string,length)=>{if(string.length==length){return true}else{return false}}
// ---------------------------------------------------------------------------------------------------------------------- //
// halfString: Takes a string and returns two strings for front and back hald, if odd a third string for middle character:
// ----------------------------------------------------------------------------------------------------------------------- //
/*  - Check string is odd
    - Split the string into two halves
    - If the string is odd take the first character in the last half and remove it
    - return all three values but have middle character as null if string given is evem.*/
export const halfString=(string)=>{let whole=typeValidation.typeCheck(string,String),front,back,mid=null;
    front=whole.slice(0,whole.length/2),back=whole.slice(whole.length/2,whole.length);
    if(oddLength(string)){mid=whole.charAt(whole.length/2),back=back.slice(1)};
    return {back,front,mid}}; 
// ----------------------------------------------------------------------------------------------------------------------- //
// oddLength: Function that takes a string and returns true if the length is a odd number:
// --------------------------------------------------------------------------------------- //
export const oddLength=(string)=>{if(typeValidation.typeCheck(string,String).length%2!=0){return true}else{return false}};
// --------------------------------------------------------------------------------------- //
/*  padString: Takes a string, desired length and padding character aswell as optional casing string and returns the string with 
    the padding and casing of the specified length. */
// ----------------------------------------------------------------------------------------------------------------------------- //

/*  - Add the casing around inital string if any
    - Use charEvenString on the padding character
    - Take the inital string and use the half string function that calls is  odd
    - keeep the middle character incase odd
    - half the padding character string 
    - Remove the length of halved string from the padding character string
    - If even: half_padding+halfstring+otherhalf+half_padding
    - else: Take 1 from front padding string and then half_padding-1char+halfstring+midchar+otherhalf+original_padding_half
    

    1) Use casing characters and surround the input string with it, validation check a stringsize of 2 only using checkLength
    3) Use hallfString() on both baseheader and the encased string (or consider generating a half sized one, or option for both)
    2) Generate the base heading using charEvenStrng() and the number input with the padding character
    4) Subtract length of halved encased string from the halved base header
    5) Formulate final output string on criteria:
        a - If even then half_based+onehalf+otherhalf+Hald_based
        b - If odd or else take one from first half based and add midchar */
// ------------------------------------------------------------------------------------------------------------------------------ //
export const padString=(length, padChar, title, encasing="[]")=>{ 
    length=typeValidation.numberCheck(length,typeValidation.type_integer);
    padChar=typeValidation.stringCheck(padChar, 1);
    title=typeValidation.typeCheck(title, String);
    encasing=typeValidation.stringCheck(encasing, 2);
    let split_title=halfString(title);
    let base_header=charEvenString(length/2, padChar).slice(0, 0-(split_title.front.length));
    let heading='';
   // base_header=base_header.slice(0, 0-(split_title.front.length));
    if(title.length%2!=0){heading=base_header.slice(0, -1)+encasing[0]+split_title.front+split_title.mid+split_title.back+encasing[1]+base_header}
    else{heading=base_header+encasing[0]+split_title.front+split_title.back+encasing[1]+base_header};
    return heading};
// Export module as object:
// ------------------------ //
export default {charEvenString,checkLength,halfString,oddLength,padString}