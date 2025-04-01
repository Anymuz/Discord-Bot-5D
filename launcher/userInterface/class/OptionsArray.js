// Import Modules:
//---------------- //
import MenuOption from "anymuz-interface/MenuOption";
import TypeValidaton from "anymuz-interface/TypeValidation";
//---------------- //
// CLASS OptionsArray - Specialised Array for holding purely menu options:
// ----------------------------------------------------------------------- //
/** Specialized array for holding MenuOption instances. @class OptionsArray @extends Array  */
export default class OptionsArray extends Array {
    // Constructor Method:
    // ------------------- //
    /** Initializes OptionsArray with type-checked values. @public @constructor @param {...MenuOption} args Initial MenuOption instances. */
    constructor(...args){super(...args);
        return new Proxy(this,{set:(target,property,value)=>{if(property!=='length'){value=TypeValidaton.typeCheck(value,MenuOption)};
        return Reflect.set(target,property,value)}})};
    // Utility Methods:
    //----------------- //
    /** Finds a menu option by its label. 
     * @public @param {string} name - The label of the menu option to search for.
     * @returns {MenuOption|null} The menu option with the specified label, or null if not found. @throws {TypeError} Throws an error if the input is not a string. 
     * @example const option = options.findOptionByName("Option 1");
     * console.log(option); // Logs the matching MenuOption object */
    findOptionByName(name){name=TypeValidaton.typeCheck(name,String);return this.find(option =>option.label===name)}};
    //----------------- //    
// ----------------------------------------------------------------------- //