// CLASS OptionsDisplay: Controls the way in which options are presented.

import typeCheck, { typeCheckArray } from "../internal/type-validation";

// ---------------------------------------------------------------------
export class OptionsDisplay {
    // Constructor method: 
    // ------------------- //
    constructor(newline = true,seperator = "|",splitter = ':',start=null)
    {this.end=``,this.format=``,this.newline=typeCheck(newline,String),this.seperator=typeCheck(seperator,String),this.splitter=typeCheck(splitter,String),this.start=typeCheck(start,String)||``};
    // ------------------- //

    // Utility Methods:
    // --------------//
    setEnd(end){this.end=typeCheck(end, String)};
    setStart(start){this.start=typeCheck(start, String)};
    setNewLine(newline){this.newline=typeCheck(newline, Boolean)};
    setSeperator(seperator){this.seperator=typeCheck(seperator, String)};
    getEnd(){return this.end};
    getStart(){return this.start};
    getNewline(){return this.newline};
    getSeperator(){return this.seperator};
    // --------------//

    #setFormat(splitter){this.splitter=typeCheck(splitter,String)};
    // METHOD displayOptions: Is given the options by a Menu object and displays them to the console.
    // --------------------------------------------------------------------------------------------//
    displayOptions(menuOptions, nameInput) {
        const options=typeCheckArray(menuOptions,Option);
        nameInput=typeCheck(nameInput,Boolean);
        if(nameInput){displayOptions=options.map((option)=>{`${option}`})}
        else if(!nameInput){displayOptions=options.map((option, index) => {`${index}${this.splitter} ${option}`})}
        else{throw new Error(`An error has occured from Menu: ${menuOptions}.nameInput has not been set correctly!`)};
    };
    // --------------------------------------------------------------------------------------------//
};
// ---------------------------------------------------------------------
// mainMenuOptions.forEach((option, index) => {mainMenu += `| ${index}: ${option} `}), mainMenu += "|"
// const displayBots = (botOptions, index) => {
//  var optionDisplay = botOptions.map((bot, index) => {optionDisplay[index] = `${index}: ${bot}`
//  console.log("------[Registered Bots]------");
//  optionDisplay.forEach((option)=> {console.log(option)});
// })};