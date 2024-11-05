// CLASS OptionsDisplay: Controls the way in which options are presented.

import typeCheck, { typeCheckArray } from "../internal/type-validation";
import typeValidator from '#internal/type-validation';

// ---------------------------------------------------------------------
export class OptionsDisplay {
    // Constructor method: 
    // ------------------- //
    constructor(newline = true,seperator = "|",splitter = ':',start=null){
        this.end=``,
        this.format=``,
        this.newline=typeValidator.typeCheck(newline,String),
        this.seperator=typeValidator.typeCheck(seperator,String),
        this.splitter=typeValidator.typeCheck(splitter,String),
        this.start=typeValidator.typeCheck(start,String)||``
    };
    // ------------------- //

    // Utility Methods:
    // --------------//
    setEnd(end){this.end=typeValidator.typeCheck(end, String)};
    setStart(start){this.start=typeValidator.typeCheck(start, String)};
    setNewLine(newline){this.newline=typeValidator.typeCheck(newline, Boolean)};
    setSeperator(seperator){this.seperator=typeValidator.typeCheck(seperator, String)};
    getEnd(){return this.end};
    getStart(){return this.start};
    getNewline(){return this.newline};
    getSeperator(){return this.seperator};
    // --------------//

    #setFormat(splitter){this.splitter=typeValidator.typeCheck(splitter,String)};
    // METHOD displayOptions: Is given the options by a Menu object and displays them to the console.
    // --------------------------------------------------------------------------------------------//
    displayOptions(menuOptions,nameInput){
        menuOptions = typeValidator.typeCheckArray(menuOptions, Option);
        nameInput = typeValidator.typeCheck(nameInput, Boolean);
        const display_options = menuOptions.map((option, index) => {return nameInput?`${option.label}`:`${index}${this.splitter} ${option.label}`});
        if (this.newline) {display_options.forEach(option => console.log(option))} 
        else if(!this.newline) {console.log(display_options.join(` ${this.seperator} `))}
        else {throw new Error(`An error has occured from Menu: nameInput has not been set correctly!`)}};


    // displayOptions(menuOptions, nameInput) { // WIP
    //     const options=typeCheckArray(menuOptions,Option);
    //     nameInput=typeCheck(nameInput,Boolean);
    //     if(nameInput){let display_options = options.map(option => `${option.label}`).join(` ${this.seperator} `);
    //         console.log(display_options)}
    //     else if(!nameInput){let display_options = options.map((option, index) => `${index}${this.splitter} ${option.label}`);
    //         display_options.forEach(option => console.log(option))}
    //     else{throw new Error(`An error has occured from Menu: ${menuOptions}.nameInput has not been set correctly!`)}};
    // --------------------------------------------------------------------------------------------//
};
// ---------------------------------------------------------------------
// mainMenuOptions.forEach((option, index) => {mainMenu += `| ${index}: ${option} `}), mainMenu += "|"
// const displayBots = (botOptions, index) => {
//  var optionDisplay = botOptions.map((bot, index) => {optionDisplay[index] = `${index}: ${bot}`
//  console.log("------[Registered Bots]------");
//  optionDisplay.forEach((option)=> {console.log(option)});
// })};