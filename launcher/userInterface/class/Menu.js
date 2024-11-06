// Import Modules:
//---------------- //
import AbstractResponse from 'anymuz-interaction/AbstractResponse';
import Display from 'anymuz-interaction/Display';
import Option from 'anymuz-interaction/Option';
import OptionsArray from 'anymuz-interaction/OptionsArray';
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
export default class Menu {
    // Constructor Method:
	// ------------------- //
    constructor(display, options, nameInput = false) {this.AbortControl=new AbortController(),this.Display=TypeValidator.typeCheck(display,Display),
        this.MessageResponse=new AbstractResponse.MenuResponse(),this.name_input=TypeValidator.typeCheck(nameInput,Boolean),this.Options=TypeValidator.typeCheck(options,OptionsArray),
        this.target=AbortControl.signal,this.UserInterface=new ReadLine.createInterface({input:process.stdin,output:process.stdout})};
    // ------------------- //
    // Utility Methods:
    //----------------- //
    addOption(option){this.Options.push(option)};
    getAllOptions(){return this.Options};
    getOption(index){return this.Options[index]};
    removeAllOptions(){this.Options=[]};
    removeOption(index){delete this.Options[index]};
    setAllOptions(options){this.Options=TypeValidator.typeCheck(options,OptionsArray)};
    setNameInput(nameInput){this.name_input=TypeValidator.typeCheck(nameInput,Boolean)};
    setOption(index,option){this.Options[index]=TypeValidator.typeCheck(option,Option)};
    //----------------- //
    // Functional methods:
    //-------------------- //
    // Method display() - Calls on it's display to show itself to the user, returns the users input:
    display(){return this.display.present(this,this.options)};
    // Method processUserInput() - Processes the user input returned from the Display:
    processUserInput(){
        let chosenOption;
        let user_input=this.display();
        if(this.name_input){chosenOption=this.options.find(option=>option.label===user_input);
            this.MessageResponse.setNegative(`${user_input} is not a valid option, please enter the exact name of the chosen option.`)}
        else if(!this.name_input){chosenOption=this.options[user_input];
            this.MessageResponse.setNegative(`${user_input} is not an option number, please enter a number that corresponds to the chosen option.`)}
        else{throw new Error(`Error in Menu object, name_input has not be correctly set (Must be True or False).`)};
        if(chosenOption){chosenOption.execute()}else{this.MessageResponse.printError()}}};
    //-------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //