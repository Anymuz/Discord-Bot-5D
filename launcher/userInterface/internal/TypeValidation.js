// Import Modules:
import StringOperation from "#internal/StringOperation";
//---------------- //
// Private constants and functions used by exported functions: 
// ----------------------------------------------------------- //
const NUMBER_TYPES=['int','float'];
const invalidTypeMessage=(value,object)=>{return`Invalid Type: ${value} must be a ${object}.`};
const invalidParameterMessage=(parameter,message)=>{return`Invalid Parameter: ${parameter}. ${message}`};
const numberType = (value) => {value=typeCheck(value, Number); 
    return Number.isInteger(value)? NUMBER_TYPES[0]:NUMBER_TYPES[1]};
// ----------------------------------------------------------- //
// Exported Functions for use in package: 
// -------------------------------------- //
// numberCheck: Checks if a number is the correct type integer/float
//  ---------------------------------------------------------------- //
export const numberCheck=(value,type)=>{if(!NUMBER_TYPES.includes(type)){throw new Error(invalidParameterMessage(type,`Number types must be either '${NUMBER_TYPES.join(' or ')}'.\n
        It is recommended to  use type_integer or type_float identifiers from this module to ensure format correctness`))}
    else if(numberType(value)!=type){throw new Error(`${invalidTypeMessage(value,`${type}`)}`)}else{return value}};
//  ---------------------------------------------------------------- //
// stringCheck: Checks that a string is the right length
// ----------------------------------------------------- //
export const stringCheck=(string, length)=>{if(StringOperation.checkLength(typeCheck(string,String),length)){return string}
    else{throw new Error(invalidParameterMessage(string,`Please specify only a ${length} character string for this function.`))}};
// ----------------------------------------------------- //
// type_integer/type_flaot: For consistency, a constant for integer type or float type is used with numberCheck
// ------------------------------------------------------------------------------------------------------------ //
export const type_integer=NUMBER_TYPES[0];
export const type_float=NUMBER_TYPES[1];
// ------------------------------------------------------------------------------------------------- //
// typeCheck: Ensures that a value is of the rihgt type or is an instance of the object
// ------------------------------------------------------------------------------------ //
export const typeCheck=(value,object)=>{if(object===Boolean||object===String||object===Number){if(typeof(value)!==object.name.toLowerCase())
    {throw new Error(`${invalidTypeMessage(value,object.name)}`)}} 
    else{if(!(value instanceof object)){throw new Error(`${invalidTypeMessage(value,object.name)}`)}}
    return value};
// ------------------------------------------------------------------------------------ //
// typeCheckArray: Same as typeCheck except it checks every item in an Array
// ------------------------------------------------------------------------- //
export const typeCheckArray=(value,object)=>{typeCheck(value,Array);
    for(let item of value){item=typeCheck(item,object)}return value};
// ------------------------------------------------------------------------- //
// Export module as object:
// ------------------------ //
export default{numberCheck,stringCheck,typeCheck,typeCheckArray,type_float,type_integer};
// ------------------------ //
// -------------------------------------- //