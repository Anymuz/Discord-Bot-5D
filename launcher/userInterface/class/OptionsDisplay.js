// Import Modules:
//---------------- //
import Menu from 'anymuz-interaction/Menu';
import OptionsArray from 'anymuz-interaction/OptionsArray';
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// CLASS OptionsDisplay: Controls the way in which options are presented.
// ---------------------------------------------------------------------- //
export default class OptionsDisplay {
    // Constructor method: 
    // ------------------- //
    constructor(seperator="|",splitter=':',start=``,newline=true){this.end=``,
        this.new_line=TypeValidator.typeCheck(newline,Boolean),
        this.seperator=TypeValidator.typeCheck(seperator,String),this.splitter=TypeValidator.typeCheck(splitter,String),this.start=TypeValidator.typeCheck(start,String)||``};
    // ------------------- //
    // Utility Methods:
    // ---------------- //
    getEnd(){return this.end};
    getStart(){return this.start};
    getNewline(){return this.newline};
    getSeperator(){return this.seperator};
    setEnd(end){this.end=TypeValidator.typeCheck(end,String)};
    setStart(start){this.start=TypeValidator.typeCheck(start,String)};
    setNewLine(newline){this.newline=TypeValidator.typeCheck(newline,Boolean)};
    setSeperator(seperator){this.seperator=TypeValidator.typeCheck(seperator,String)};
    // --------------//
    // METHOD displayOptions(Menu) - Is given the options by a Menu object and displays them to the console:
    // ----------------------------------------------------------------------------------------------------- //
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
