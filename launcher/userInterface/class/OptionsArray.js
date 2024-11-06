// Import Modules:
//---------------- //
import Option from "anymuz-interaction/Option";
import TypeValidator from "#internal/TypeValidation";
//---------------- //
// CLASS OptionsArray - Specialised Array for holding purely menu objects:
// ----------------------------------------------------------------------- //
export default class OptionsArray extends Array{constructor(...args){super(...args)
    return new Proxy(this,{set:(target,property,value)=>{if(property!=='length'){value=TypeValidator.typeCheck(value,Option)}
    return Reflect.set(target,property,value)}})}};
// ----------------------------------------------------------------------- //
