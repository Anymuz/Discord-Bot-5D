// Import Modules:
//---------------- //
import Menu from 'anymuz-interface/Menu';
import OptionsArray from 'anymuz-interface/OptionsArray';
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// CLASS OptionsDisplay: Controls the way in which options are presented.
// ---------------------------------------------------------------------- //
/** Class to control the presentation of options in a menu. */
export default class OptionsDisplay {
    // Constructor method: 
    // ------------------- //
    /** Initializes OptionsDisplay properties. @param {string} separator - Option separator. @param {string} splitter - Divider between index and label. */
    constructor(seperator="|",splitter=':',start=``,newline=true){this.end=``,
        this.new_line=TypeValidator.typeCheck(newline,Boolean),
        this.seperator=TypeValidator.typeCheck(seperator,String),this.splitter=TypeValidator.typeCheck(splitter,String),this.start=TypeValidator.typeCheck(start,String)||``};
    // ------------------- //
    // Utility Methods:
    // ---------------- //
    /** @returns {string} End character for display. */
    getEnd(){return this.end};
    /** @returns {string} Start character for display. */
    getStart(){return this.start};
    /** @returns {boolean} Newline setting for display. */
    getNewline(){return this.newline};
    /** @returns {string} Option separator. */
    getSeperator(){return this.seperator};
    /** Sets the end character. @param {string} end - End character. */
    setEnd(end){this.end=TypeValidator.typeCheck(end,String)};
    /** Sets the start character. @param {string} start - Start character. */
    setStart(start){this.start=TypeValidator.typeCheck(start,String)};
    /** Sets newline display behavior. @param {boolean} newline - Newline setting. */
    setNewLine(newline){this.newline=TypeValidator.typeCheck(newline,Boolean)};
    /** Sets option separator. @param {string} separator - Option separator. */
    setSeperator(seperator){this.seperator=TypeValidator.typeCheck(seperator,String)};
    // --------------//
    // METHOD displayOptions(Menu) - Is given the options by a Menu object and displays them to the console:
    // ----------------------------------------------------------------------------------------------------- //
    /** Displays options from Menu object. @param {Menu} menu - Menu instance. */
    displayOptions(menu){
        menu=TypeValidator.typeCheck(menu,Menu)
        menu.Options=TypeValidator.typeCheck(menu.Options,OptionsArray);
        menu.name_input=TypeValidator.typeCheck(menu.name_input,Boolean);
        const display_options=menu.Options.map((option,index)=>{return menu.name_input?`${option.label}`:`${index}${this.splitter} ${option.label}`});
        if (this.new_line){display_options.forEach(option=>console.log(option))} 
        else if(!this.new_line){console.log(display_options.join(` ${this.seperator} `))}
        else {throw new Error(`An error has occured from Menu: nameInput has not been set correctly!`)}}};
// ----------------------------------------------------------------------------------------------------- //    
// ---------------------------------------------------------------------- //
