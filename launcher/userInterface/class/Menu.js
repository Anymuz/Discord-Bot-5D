// Import Modules:
//---------------- //
import InterfaceResponse from 'anymuz-interface/InterfaceResponse';
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
 * @class Menu @module Menu @property {AbortController} AbortControl Controller for aborting input. @property {Display} Display Display instance for the menu.
 * @property {MenuResponse} MessageResponse Response handler for errors. @property {boolean} name_input Flag for name-based input mode.
 * @property {OptionsArray} Options Array of menu options. @property {AbortSignal} target Signal for managing abort control.
 * @property {ReadLine.Interface} UserInterface Interface for reading user input. */
export default class Menu {
    // Constructor Method:
    // ------------------- //
    /** Initializes Menu properties.
     * @public @constructor @param {Display} display Display instance. @param {OptionsArray} options Array of menu options.
     * @param {ReadLine.Interface} userInterface Readline interface instance. @param {boolean} [nameInput=false] Flag for name-based input mode, default is false. */
    constructor(display,options,userInterface,nameInput=false){this.AbortControl=new AbortController(),
        this.Display=TypeValidation.typeCheck(display,Display),
        this.MessageResponse=new InterfaceResponse.MenuResponse(),
        this.name_input=TypeValidation.typeCheck(nameInput,Boolean),
        this.Options=TypeValidation.typeCheck(options,OptionsArray),
        this.target=this.AbortControl.signal,
        this.UserInterface=TypeValidation.typeCheck(userInterface,ReadLine.Interface)};
    // ------------------- //
    // Utility Methods:
    //----------------- //
    /** Adds an option to the menu. @public @param {MenuOption} option Menu option to add. */
    addOption(option){this.Options.push(option)};
    /**Retrieves all menu options. @public @returns {OptionsArray} All menu options. */
    getAllOptions(){return this.Options};
    /** Retrieves an option at the specified index. @public  @param {number} index Index of the option. @returns {MenuOption} Option at specified index. */
    getOption(index){return this.Options[index]};
    /** Removes all menu options. @public*/
    removeAllOptions(){this.Options=[]};
    /** Deletes an option at the specified index. @public @param {number} index Index of the option to remove. */
    removeOption(index){delete this.Options[index]};
    /** Sets all options for the menu. @public @param {OptionsArray} options Array of menu options. */
    setAllOptions(options){this.Options=TypeValidation.typeCheck(options,OptionsArray)};
    /** Sets the user interface for menu. @public @param {Interface} userInterface Readline interface instance. */
    setUserInterface(userInterface){this.UserInterface=TypeValidation.typeCheck(userInterface,ReadLine.Interface)};
    /** Sets whether name input is required. @public @param {boolean} nameInput If true, enables name input. */
    setNameInput(nameInput){this.name_input=TypeValidation.typeCheck(nameInput,Boolean)};
    /** Updates an option at the specified index. @public @param {number} index Index of the option. @param {MenuOption} option Menu option. */
    setOption(index,option){this.Options[index]=TypeValidation.typeCheck(option,MenuOption)};
    //----------------- //
    // Functional methods:
    //-------------------- //
    // Method display() - Calls on its display to show itself to the user, returns the user's input:
    /** Presents the menu and awaits user input. @public @async @returns {Promise<string>} User input. @example const menuInput = await menu.display(); */
    async display(){return await this.Display.present(this)};
    // Method processUserInput() - Processes the user input returned from the Display:
    /** Processes user input to execute or redirect. @public @param {string} userInput User's input selection. @example menu.processUserInput(userInput); */
    processUserInput(userInput){let chosenOption;
        if(userInput=='-1'||userInput=='close'||userInput=='exit'){return this.UserInterface.close()}
        if(this.name_input){chosenOption=this.Options.find(option=>option.label===userInput);
            this.MessageResponse.setNegative(`${userInput} is not a valid option, please enter the exact name of the chosen option.`)}
        else if(!this.name_input){let chosenIndex=parseInt(userInput,10);
            chosenOption=this.Options[chosenIndex];
            this.MessageResponse.setNegative(`${userInput} is not an option number, please enter a number that corresponds to the chosen option.`)}
        else{throw new Error(`Error in Menu object, name_input has not be correctly set (Must be True or False).`)};
        if(chosenOption){chosenOption.execute()}else{this.MessageResponse.printError()}};
    // Method start() - Waits for user input then parses it into the processUserInput method:
    /** Starts the menu interaction. @public @async @example await menu.start(); */
    async start(){this.processUserInput(await this.display())}};
    //-------------------- //
// ---------------------------------------------------------------------//