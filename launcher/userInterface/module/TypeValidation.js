// Import Modules:
import StringOperation from "anymuz-interface/StringOperation";
//---------------- //
// Private constants and functions used by exported functions: 
// ----------------------------------------------------------- //
/** Array of supported number types. @private @constant {string[]} */
const NUMBER_TYPES=['int','float'];
/** Generates invalid type error messge. @private @param {*} value Value that caused error. @param {string} object Expected type or object. @returns {string} Error message*/
const invalidTypeMessage=(value,object)=>{return`Invalid Type: ${value} must be a ${object}.`};
/** Generates invalid parameter error message. @private @param {string} parameter Invalid parameter. @param {string} message Error Explaination. @returns {string} Error message. */
const invalidParameterMessage=(parameter,message)=>{return`Invalid Parameter: ${parameter}. ${message}`};
/** Determines if a number is an integer or float. @private @param {*} value Value to check. @returns {string} 'int' if the value is an integer, otherwise 'float'. */
const numberType = (value) => {value=typeCheck(value, Number); 
    return Number.isInteger(value)? NUMBER_TYPES[0]:NUMBER_TYPES[1]};
// ----------------------------------------------------------- //
// Exported Functions for use in package: 
// -------------------------------------- //
// numberCheck: Checks if a number is the correct type integer/float
//  ---------------------------------------------------------------- //
/** Validation functions for types and values, including numbers (integer or float), string length, object instances and constants for integers and floats @module TypeValidation */
/** Checks if a number matches the specified type.
 * @public @param {number} value Number to check. @param {string} type Expected type, either `type_integer` or `type_float`.
 * @returns {number} Validated number. @throws {Error} Throws an error if type is not `int` or `float`, or if the number does not match the expected type.
 * @example numberCheck(5.5, type_float); // Returns 5.5 */
export const numberCheck=(value,type)=>{if(!NUMBER_TYPES.includes(type)){throw new Error(invalidParameterMessage(type,`Number types must be either '${NUMBER_TYPES.join(' or ')}'.\n
        It is recommended to  use type_integer or type_float identifiers from this module to ensure format correctness`))}
    else if(numberType(value)!=type){throw new Error(`${invalidTypeMessage(value,`${type}`)}`)}else{return value}};
//  ---------------------------------------------------------------- //
// stringCheck: Checks that a string is the right length
// ----------------------------------------------------- //
/** Verifies that a string has the specified length.
 * @public @param {string} string String to check. @param {number} length Expected length of the string. @returns {string} Validated string.
 * @throws {Error} Throws an error if the string does not match the expected length. @example stringCheck("hello", 5); // Returns "hello" */
export const stringCheck=(string, length)=>{if(StringOperation.checkLength(typeCheck(string,String),length)){return string}
    else{throw new Error(invalidParameterMessage(string,`Please specify only a ${length} character string for this function.`))}};
// ----------------------------------------------------- //
// type_integer/type_float: For consistency, a constant for integer type or float type is used with numberCheck
// ------------------------------------------------------------------------------------------------------------ //
/** Integer type identifier for consistency with `numberCheck`. @type {string} */
export const type_integer=NUMBER_TYPES[0];
/** Float type identifier for consistency with `numberCheck`. @type {string} */
export const type_float=NUMBER_TYPES[1];
// ------------------------------------------------------------------------------------------------------------ //
// typeCheck: Ensures that a value is of the rihgt type or is an instance of the object
// ------------------------------------------------------------------------------------ //
/** Validates that a value matches the expected type or is an instance of the provided constructor.
 * @public @param {*} value Value to check. @param {Function} object Expected type or constructor function. @returns {*} Validated value.
 * @throws {Error} Throws an error if the value does not match the expected type or instance. @example typeCheck(42, Number); // Returns 42 */
export const typeCheck=(value,object)=>{if(object===Boolean||object===String||object===Number){if(typeof(value)!==object.name.toLowerCase())
    {throw new Error(`${invalidTypeMessage(value,object.name)}`)}} 
    else{if(!(value instanceof object)){throw new Error(`${invalidTypeMessage(value,object.name)}`)}}
    return value};
// ------------------------------------------------------------------------------------ //
// typeCheckArray: Same as typeCheck except it checks every item in an Array
// ------------------------------------------------------------------------- //
/** Validates each item in an array against the expected type or constructor.
 * @public @param {Array} value Array to check. @param {Function} object Expected type or constructor function for each item. @returns {Array} Validated array.
 * @throws {Error} Throws an error if any item in the array does not match the expected type or instance. @example typeCheckArray([1, 2, 3], Number); // Returns [1, 2, 3]*/
export const typeCheckArray=(value,object)=>{typeCheck(value,Array);
    for(let item of value){item=typeCheck(item,object)}return value};
// ------------------------------------------------------------------------- //
// Export module as object:
// ------------------------ //
export default{numberCheck,stringCheck,typeCheck,typeCheckArray,type_float,type_integer};
// ------------------------ //
