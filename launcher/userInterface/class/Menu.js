// Import Modules:
//---------------- //
import AbstractResponse from 'anymuz-interface/AbstractResponse';
import Display from 'anymuz-interface/Display';
import MenuOption from 'anymuz-interface/MenuOption';
import OptionsArray from 'anymuz-interface/OptionsArray';
import ReadLine from 'readline';
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
/*  CLASS Menu:
    A menu consists of multiple displays, each containing a question and options. The options are menu attributes. The display defines
    the layout, with the heading text,and an OptionsDisplay to show options. The menu accepts input as a number (for option index) or option name. 
    Options can either redirect to another menu or trigger a function if they are execution-based. Every option has a ReplyResponse, and execution 
    options also have an ExecutionResponse. A MenuResponse handles errors with a negative response and uses a preset object for positive responses. 
    The menu reads user input through the readline interface.   */
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
/** Class representing a menu with options for user interaction. */
export default class Menu{
    // Constructor Method:
	// ------------------- //
    /** Initializes Menu properties. @param {Display} display - Display instance. @param {OptionsArray} options - Array of menu options. */
    constructor(display,options,userInterface,nameInput=false){this.AbortControl=new AbortController(),
        this.Display=TypeValidator.typeCheck(display,Display),
        this.MessageResponse=new AbstractResponse.MenuResponse(),
        this.name_input=TypeValidator.typeCheck(nameInput,Boolean),
        this.Options=TypeValidator.typeCheck(options,OptionsArray),
        this.target=this.AbortControl.signal,
        this.UserInterface=TypeValidator.typeCheck(userInterface,ReadLine.Interface)};
    // ------------------- //
    // Utility Methods:
    //----------------- //
    /** Adds an option to the menu. @param {MenuOption} option - Menu option to add. */
    addOption(option){this.Options.push(option)};
    /** @returns {OptionsArray} All menu options. */
    getAllOptions(){return this.Options};
    /** @returns {MenuOption} Option at specified index. @param {number} index - Index of the option. */
    getOption(index){return this.Options[index]};
    /** Removes all menu options. */
    removeAllOptions(){this.Options=[]};
    /** Deletes an option at the specified index. @param {number} index - Index of the option to remove. */
    removeOption(index){delete this.Options[index]};
    /** Sets all options for the menu. @param {OptionsArray} options - Array of menu options. */
    setAllOptions(options){this.Options=TypeValidator.typeCheck(options,OptionsArray)};
    /** Sets the user interface for menu. @param {Interface} userInterface - Readline interface instance. */
    setUserInterface(userInterface){this.UserInterface=TypeValidator.typeCheck(userInterface,ReadLine.Interface)};
    /** Sets whether name input is required. @param {boolean} nameInput - If true, enables name input. */
    setNameInput(nameInput){this.name_input=TypeValidator.typeCheck(nameInput,Boolean)};
    /** Updates an option at the specified index. @param {number} index - Index of the option. @param {MenuOption} option - Menu option. */
    setOption(index,option){this.Options[index]=TypeValidator.typeCheck(option,MenuOption)};
    //----------------- //
    // Functional methods:
    //-------------------- //
    // Method display() - Calls on it's display to show itself to the user, returns the users input:
    /** Presents the menu and awaits user input. @returns {Promise<string>} User input. */
    async display(){return await this.Display.present(this)};
    // Method processUserInput() - Processes the user input returned from the Display:
    /** Processes user input to execute or redirect. @param {string} userInput - User's input selection. */
    processUserInput(userInput){let chosenOption;
        if(userInput=='-1'||userInput=='close'||userInput=='exit'){return this.UserInterface.close()}
        if(this.name_input){chosenOption=this.Options.find(option=>option.label===userInput);
            this.MessageResponse.setNegative(`${userInput} is not a valid option, please enter the exact name of the chosen option.`)}
        else if(!this.name_input){let chosenIndex=parseInt(userInput,10);
            chosenOption=this.Options[chosenIndex];
            this.MessageResponse.setNegative(`${userInput} is not an option number, please enter a number that corresponds to the chosen option.`)}
        else{throw new Error(`Error in Menu object, name_input has not be correctly set (Must be True or False).`)};
        if(chosenOption){chosenOption.execute()}else{this.MessageResponse.printError()}};
    /** Starts the menu interaction. */
    async start(){this.processUserInput(await this.display())}};
    //-------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
