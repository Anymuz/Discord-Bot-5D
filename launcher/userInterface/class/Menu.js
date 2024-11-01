/* A manu can consist of multiple displays which each contain a question to the user. The options are attributes of menu (change from Display)
The display objecct defines how the menu looks i.e heading and text and also contains a OptionsDisplay displaying each option in it's menu
Each menu should have an input type of either a number corresponding to the option or option name
Options display simply is a format for presenting the options available, in a menu there is the Display and OptionsDisplay, multiple options, 
each option has a response object. Options can be either redirection or execution, if  exceution they must also have an execution response object
A redirection option must have a corresponding Menu  object. Execution options take a function as an attribut to be executed if that option is triggered
A response class has abstraction for an executionResponse and replyResponse, every option must have a reply response, only execution options need to have
execition response
A meny will have a menuResponse which must have a negative response (for errors) and take the objects response as a positive (pre-set object response attribute for this class)
Each display must have a prompt that is presented to the user but it is the menu that reads the response and selects the option to run.
Each menu must take in a userInterface object from readline aswell.
*/

import readline from'readline';
import{typeCheck,typeCheckArray}from "../internal/type-validation";
import{Display} from "anymuz-interaction/Display";
import{MenuResponse}from'anymuz-interaction/InterfaceResponse';

//import {}


/*  CLASS Menu:
    A menu consists of multiple displays, each containing a question and options. The options are menu attributes. The display defines
    the layout, with the heading text,and an OptionsDisplay to show options. The menu accepts input as a number (for option index) or option name. 
    Options can either redirect to another menu or trigger a function if they are execution-based. Every option has a ReplyResponse, and execution 
    options also have an ExecutionResponse. A MenuResponse handles errors with a negative response and uses a preset object for positive responses. 
    The menu reads user input through the readline interface.   */
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
export default class Menu{
    constructor(display, options, nameInput = false) {
        /*if(inputType!= typeof(Boolean)){throw new Error(`Invalid Type: namedInput must be a Boolean object.`)};
        if(display!= typeof(Display)){throw new Error(`Invalid Type: display must be a Display object.`)};
        if(options!= typeof(Array)){throw new Error(`Invalid Type: options must be an array of Option objects.`)};*/  
        this.abortControl=new AbortController();
        this.display=typeCheck(display,Display);
        this.messageResponse=new MenuResponse();
        this.nameInput=typeCheck(nameInput,Boolean);
        this.options=typeCheckArray(options,Option);//Option[]
        this.userInterface=readline.createInterface({input:process.stdin,output:process.stdout});//Readline
        this.target=abortControl.signal;
    };
    // Utility Methods:
    //----------------- //
    addOption(option){this.options.push(option)};
    getAllOptions(){return this.options};
    getOption(index){return this.options[index]};
    removeAllOptions(){this.options=[]};
    removeOption(index){delete this.options[index]};
    setAllOptions(options){this.options=typeCheckArray(options,Option)};
    setNameInput(nameInput){this.nameInput=typeCheck(nameInput,Boolean)};
    setOption(index,option){this.options[index]=typeCheck(option)};
    //----------------- //
    // Functional methods:
    //-------------------- //
    // target.addEventListener('abortMenu', () => {
    //     console.log('You must input the number that corresponds to your choice.');
    // }, { once: true })
    display(){return this.display.present(this, this.options)};
    processUserInput(){let userInput=this.display();
		var chosen;
		if(this.nameInput){for(let choice of [index,this.options]){choice=typeCheck(choice,Option);
			if(choice==userInput){chosen=typeCheck(choice,Option);
			break}else{chosen=false;
			this.menu.menuResponse.setNegative(`Choice is not a valid option, please enter the exact name of the chosen option.`)}}}
		else if(!this.nameInput){for(let choice in this.options){choice=typeCheck(choice,Option);
			if(choice==userInput){chosen=typeCheck(choice,Option);
			break}else{chosen=false;
			this.menu.menuResponse.setNegative(`Choice is not a valid option, please enter a number that corresponds to the chosen option.`);
		}}}else{throw new Error(`An error has occured, nameInput has not been set correctly!`)};
		return{choice}};
    //-------------------- //
};
// ----------------------------------------------------------------------------------------------------------------------------------------------- //