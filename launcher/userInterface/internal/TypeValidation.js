// Import Modules:
import StringOperation from "#internal/StringOperation";
//---------------- //
// Private constants and functions used by exported functions: 
// ----------------------------------------------------------- //
const NUMBER_TYPES=['int','float'];
const invalidTypeMessage=(value,object)=>{return`Invalid Type: ${value} must be a ${object}.`};
const invalidParameterMessage=(parameter, message)=>{return`Invalid Parameter: ${parameter}. ${message}`};
const numberType=(value)=>{value = typeCheck(value, Number);
    if(Number.isInteger(value)){return NUMBER_TYPES[0]}else{return NUMBER_TYPES[1]}};
// ----------------------------------------------------------- //
// Exported Functions for use in package: 
// -------------------------------------- //
export const stringCheck=(string, length)=>{if(StringOperation.checkLength(typeCheck(string, String), length)){return string}else
    {throw new Error(invalidParameterMessage(string, `Please specify only a ${length} character string for this function.`))}};
export const type_integer=NUMBER_TYPES[0];
export const type_float=NUMBER_TYPES[1];
export const typeCheck=(value,object)=>{if((typeof(value)!==typeof(typeof(object)))
    &&(typeof(value) !== typeof(object()))
    &&!(value instanceof object))
    {throw new Error(`${invalidTypeMessage(value,object)}`)}else{return value}};
export const typeCheckArray=(value,object)=>{typeCheck(value,Array);
    for(let item of value){item=typeCheck(item,object)}return value};
export const numberCheck=(value, type)=>{if(!NUMBER_TYPES.includes(type))
    {throw new Error(invalidParameterMessage(type,`Number types must be either '${NUMBER_TYPES.join(' or ')}'.\n
        It is recommended to  use type_integer or type_float identifiers from this module to ensure format correctness`))}
    else{if (numberType(value)!=type){throw new Error(`${invalidTypeMessage(value,`${type}`)} Required Type: ${type})}`)}else{return value}}};
export default{numberCheck,stringCheck,typeCheck,typeCheckArray,type_float,type_integer};
// -------------------------------------- //