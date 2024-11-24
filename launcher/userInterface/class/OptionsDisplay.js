// Import Modules:
//---------------- //
import Menu from 'anymuz-interface/Menu';
import OptionsArray from 'anymuz-interface/OptionsArray';
import TypeValidation from 'anymuz-interface/TypeValidation';
//---------------- //
// CLASS OptionsDisplay: Controls the way in which options are presented.
// ---------------------------------------------------------------------- //
/** Class to control the presentation of options in a menu.
 * @class OptionsDisplay @module OptionsDisplay @property {boolean} new_line Whether each option is displayed on a new line.
 * @property {string} separator Character separating options on a single line. @property {string} splitter Character dividing index and label for each option. */
export default class OptionsDisplay {
    // Constructor method: 
    // ------------------- //
    /** Initializes OptionsDisplay properties. 
     * @public @constructor @param {string} separator Option line separator, default is '|'. @param {string} splitter Character between number and option, default is ':'.
     * @param {boolean} newLine Display on new line, default is true*/
    constructor(separator="|",splitter=':',newline=true){this.new_line=TypeValidation.typeCheck(newline,Boolean),
        this.separator=TypeValidation.typeCheck(separator,String),
        this.splitter=TypeValidation.typeCheck(splitter,String)};

    /*
    separator (string): Option line separator, default is "|".
splitter (string): Character between number and option, default is ":".
newLine (boolean): Display each option on a new line, default is true.
    */
    // ------------------- //
    // Utility Methods:
    // ---------------- //
    /** Retrieves the newline setting for display. @public @returns {boolean} Newline setting for display. */
    getNewline(){return this.newline};
    /** Retrieves the option separator. @public @returns {string} Option separator. */
    getSeparator(){return this.separator};
    /** Retrieves the option splitter between index and label. @public @returns {string} Option splitter between index and label. */
    getSplitter(){return this.splitter};
    /** Sets newline display behavior. @public @param {boolean} newline Newline setting. */
    setNewLine(newline){this.newline=TypeValidation.typeCheck(newline,Boolean)};
    /** Sets single line option separator. @public @param {string} separator Option separator. */
    setSeparator(separator){this.separator=TypeValidation.typeCheck(separator,String)};
    /** Sets option splitter between index and label. @public @param {string} separator Option splitter between index and label. */
    setSplitter(splitter){this.splitter=TypeValidation.typeCheck(splitter,String)};    
    // --------------- //
    // METHOD displayOptions(Menu) - Is given the options by a Menu object and displays them to the console:
    // ----------------------------------------------------------------------------------------------------- //
    /** Displays options from Menu object. 
     * @public @param {Menu} menu Menu instance containing an `OptionsArray`. @throws {Error} Throws an error if `new_line` is not set. @example optionsDisplay.displayOptions(menu); */
    displayOptions(menu){
        menu=TypeValidation.typeCheck(menu,Menu)
        menu.Options=TypeValidation.typeCheck(menu.Options,OptionsArray);
        menu.name_input=TypeValidation.typeCheck(menu.name_input,Boolean);
        const display_options=menu.Options.map((option,index)=>{return menu.name_input?`${option.label}`:`${index}${this.splitter} ${option.label}`});
        if (this.new_line){display_options.forEach(option=>console.log(option))} 
        else if(!this.new_line){console.log(display_options.join(` ${this.separator} `))}
        else {throw new Error(`An error has occured from Menu: new_line has not been set correctly!`)}}};
    // ----------------------------------------------------------------------------------------------------- //    
// ---------------------------------------------------------------------- //