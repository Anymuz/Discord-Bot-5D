// Import Modules:
//---------------- //
import {MenuResponse} from 'anymuz-interface/InterfaceResponse';
import Display from 'anymuz-interface/Display';
import MenuOption from 'anymuz-interface/MenuOption';
import OptionsArray from 'anymuz-interface/OptionsArray';
import ReadLine from 'readline';
import TypeValidation from 'anymuz-interface/TypeValidation';
//---------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
/*  CLASS Menu:
    A menu consists of multiple displays, each containing a question and options. The options are menu attributes. The display defines
    the layout, with the heading text,and an OptionsDisplay to show options. The menu accepts input as a number (for option index) or option name. 
    Options can either redirect to another menu or trigger a function if they are execution-based. Every option has a ReplyResponse, and execution 
    options also have an ExecutionResponse. A MenuResponse handles errors with a negative response and uses a preset object for positive responses. 
    The menu reads user input through the readline interface.   */
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
/** Class representing a menu with options for user interaction.
 * @class Menu @module Menu @property {AbortController} abortController Controller for aborting input. @property {Display} Display Display instance for the menu.
 * @property {MenuResponse} menuResponse Response handler for errors. @property {boolean} name_input Flag for name-based input mode.
 * @property {OptionsArray} options Array of menu options. @property {AbortSignal} target Signal for managing abort control.
 * @property {ReadLine.Interface} userInterface Interface for reading user input. */
export default class Menu {
    // Constructor Method:
    // ------------------- //
    /** Initializes Menu properties.
     * @public @constructor @param {Display} display Display instance. @param {OptionsArray} options Array of menu options.
     * @param {ReadLine.Interface} userInterface Readline interface instance. @param {boolean} [nameInput=false] Flag for name-based input mode, default is false. 
     * @param {MenuResponse} response MenuResponse object for custom error handling, will instantiate default if null*/
    constructor(display,options,userInterface,response,nameInput=false){this.abortController=new AbortController(),
        this.display=TypeValidation.typeCheck(display,Display),
        this.menuResponse=TypeValidation.typeCheck(response,MenuResponse) || new MenuResponse("Invalid Input: Please select an available option."),
        this.nameInput=TypeValidation.typeCheck(nameInput,Boolean) || false,
        this.options=TypeValidation.typeCheck(options,OptionsArray) || new OptionsArray();
        this.userInterface=TypeValidation.typeCheck(userInterface,ReadLine.Interface) || ReadLine.createInterface({ input: process.stdin, output: process.stdout })};
    // ------------------- //
    // Utility Methods:
    //----------------- //
    /** Adds an option to the menu. @public @param {MenuOption} option Menu option to add. */
    addOption(option){this.options.push(TypeValidation.typeCheck(option, MenuOption))};
    /**Retrieves all menu options. @public @returns {OptionsArray} All menu options. */
    getAllOptions(){return this.options};
    /** Retrieves an option at the specified index. @public  @param {number} index Index of the option. @returns {MenuOption} Option at specified index. */
    getOption(index){return this.options[index]};
    /** Removes all menu options. @public*/
    removeAllOptions(){this.options=[]};
    /** Deletes an option at the specified index. @public @param {number} index Index of the option to remove. */
    removeOption(index){if(index>=0 && index<this.options.length){this.options.splice(index,1)}
                       else{console.error(`Invalid Parameter: Index must be between 0 and ${this.options.length-1}`)}};
    /** Sets all options for the menu. @public @param {OptionsArray} options Array of menu options. */
    setAllOptions(options){this.options=TypeValidation.typeCheck(options,OptionsArray)};
    /** Sets the user interface for menu. @public @param {Interface} userInterface Readline interface instance. */
    setUserInterface(userInterface){this.userInterface=TypeValidation.typeCheck(userInterface,ReadLine.Interface)};
    /** Sets whether name input is required. @public @param {boolean} nameInput If true, enables name input. */
    setNameInput(nameInput){this.nameInput=TypeValidation.typeCheck(nameInput,Boolean)};
    /** Updates an option at the specified index. @public @param {number} index Index of the option. @param {MenuOption} option Menu option. */
    setOption(index,option){this.options[index]=TypeValidation.typeCheck(option,MenuOption)};
    //----------------- //
    // Functional methods:
    //-------------------- //
    // Method display() - Calls on its display to show itself to the user, returns the user's input:
    /** Presents the menu. @public @example const menuInput = menu.display(); */
    display(){this.display.present(this.options)};
    // Method processUserInput() - Processes the user input returned from the Display:
    /** Processes user input to execute or redirect. @public @param {string} input User's input selection. @example menu.processUserInput(input); */
    async processUserInput(input){
        if (['-1','close','exit'].includes(input.toLowerCase())){console.log("Session Terminated.")
            this.userInterface.close();
            return};
        const chosenOption=this.nameInput?this.options.find(option=>option.label===input):this.options[parseInt(input)-1];
        if (chosenOption){await chosenOption.execute()}else{this.menuResponse.printError()}};
    // Method start() - Waits for user input then parses it into the processUserInput method:
    /** Starts the menu interaction. @public @async @example await menu.start(); */
    async start(){
        this.abortController.display();
        for await (const line of this.userInterface){await this.processUserInput(line.trim());
            this.display()}}};
    //-------------------- //
// ---------------------------------------------------------------------//