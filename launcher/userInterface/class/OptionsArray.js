// Import Modules:
//---------------- //
import MenuOption from "anymuz-interface/MenuOption";
import TypeValidaton from "anymuz-interface/TypeValidation";
//---------------- //
// CLASS OptionsArray - Specialised Array for holding purely menu options:
// ----------------------------------------------------------------------- //
/** Specialized array for holding MenuOption instances. @class OptionsArray @extends Array @module OptionsArray */
export default class OptionsArray extends Array {
    /** Initializes OptionsArray with type-checked values. @public @constructor @param {...MenuOption} args Initial MenuOption instances. */
    constructor(...args){super(...args);
        return new Proxy(this,{set:(target,property,value)=>{if(property!=='length'){value=TypeValidaton.typeCheck(value,MenuOption)};
        return Reflect.set(target,property,value)}})}};
// ----------------------------------------------------------------------- //