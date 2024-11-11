// Import Modules:
//---------------- //
import MenuOption from "anymuz-interface/MenuOption";
import TypeValidator from "#internal/TypeValidation";
//---------------- //
// CLASS OptionsArray - Specialised Array for holding purely menu option:
// ----------------------------------------------------------------------- //
/** Specialized array for holding MenuOption instances. */
export default class OptionsArray extends Array{
    /** Initializes OptionsArray with type-checked values. */
    constructor(...args){super(...args);
    return new Proxy(this,{set:(target,property,value)=>{if(property!=='length'){value=TypeValidator.typeCheck(value,MenuOption)};
    return Reflect.set(target,property,value)}})}};
// ----------------------------------------------------------------------- //
