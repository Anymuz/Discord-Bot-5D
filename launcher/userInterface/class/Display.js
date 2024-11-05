import Menu from "anymuz-interaction/Menu";
import { OptionsDisplay } from "anymuz-interaction/OptionsDisplay";
import typeValidator from '#internal/type-validation';
import stringOperation from '#internal/string-operations'

// CLASS Display: Handles displaying the menu to the user.
// -----------------------------------------------------//
export class Display {
    constructor(heading,text,encasing='[]',fillChar='-',lineLength=64, optionsDisplay){
		this.base_heading=``;
		this.encasing=typeValidator.stringCheck(encasing,2);
		this.filler=typeValidator.stringCheck(fillChar,1);	
        this.heading=typeValidator.typeCheck(heading,String);
		this.line_size=typeValidator.numberCheck(lineLength,typeValidator.type_integer);
		this.line_spacer=stringOperation.charEvenString(this.line_size,this.filler);
		this.text=typeValidator.typeCheck(text,String);
        this.options_display=typeValidator.typeCheck(optionsDisplay, OptionsDisplay);
        this.prompt=``};
	// ---------------- //
    // Utility Methods:
    // ---------------- //
	getEncasing(){return this.encasing}
    getHeading(){return this.heading};
	getLineSpacer(){return this.line_spacer};
    getText(){return this.text};
    setHeading(heading){this.heading=heading};
	setLineSpacer(fillChar=this.fillChar){this.filler = typeValidator.stringCheck(fillChar,1);
		this.line_spacer=stringOperation.charEvenString(this.line_size,fillChar)};
    setText(text){this.text=typeValidator.typeCheck(text,String)};
    // --------------//
    // Functional Methods:
    // -----------------//
    present(menu, options){
		options = typeValidator.typeCheckArray(options,Option);
		menu = typeValidator.typeCheck(menu,Menu);
		this.#setPrompt(menu);
		this.displayHeading();
		this.options_display.displayOptions(menu, options);
		let userInput = this.#processUserInput(menu);
		return userInput};
	//setMenu(menu){this.menu=typeCheck(menu,Menu)};
	#processUserInput(menu){let userInput=this.#showPrompt(callback=>{return callback}); //redo
		let chosen;
		if(menu.nameInput){for(let choice of [index,menu.options]){choice=typeValidator.typeCheck(choice,Option);
			if(choice==userInput){chosen=typeValidator.typeCheck(choice,Option);
				return{choice}}else{chosen=false;
			this.menu.menuResponse.setNegative(`${choice} is not a valid option, please enter the exact name of the chosen option.`)}}}
		else if(!menu.nameInput){for(let choice in this.options){choice=typeValidator.typeCheck(choice,Option)
			if(choice==userInput){chosen=typeValidator.typeCheck(choice,Option);
				return{choice}}else{chosen=false;
			this.menu.menuResponse.setNegative(`${choice} is not a valid option, please enter a number that corresponds to the chosen option.`);
		}}}else{throw new Error(`An error has occured, nameInput has not been set correctly!`)}};
	// ----------------//
	#setPrompt(menu){menu=typeValidator.typeCheck(menu,Menu);
		if (menu.nameInput){this.prompt=`Please input answer: `}
        else if(!menu.nameInput){this.prompt=`Please input corresponding number: `}
        else{throw new Error(`An error has occured, nameInput has not be set correctly!`)}};

	#showPrompt(callback){this.userInterface.question(this.prompt,(userInput)=>{callback(userInput)})};

	setOptionsDisplay(optionsDisplay){this.options_display=typeValidator.typeCheck(optionsDisplay,OptionsDisplay)};
	displayHeading(encasing=this.encasing,filler=this.filler){ 
		if (encasing!=this.encasing||filler != this.filler){this.encasing=typeValidator.stringCheck(encasing,2);
			this.filler=typeValidator.stringCheck(filler);
			const base_heading=stringOperation.padString(this.line_size,this.filler,this.heading,this.encasing)
			console.log(base_heading)}};	
};
// -----------------------------------------------------//

const mainMenuDisplay = {
	heading: "---------[Bot Launch Controller]---------",
	text: `
		Use this to activate the bots, remember to use deploy if commands are new or changed. You can input -1 at any time to return to this menu.\n
		There will be additional features coming soon.
	`,
	options: [
		"Deploy Bot Commands",
		"Launch Bot",
		"Generate Bot",
		"Generate Command",
		"Command Packages"
	],
	display: {
		start: "",
	//	main: `| ${index}: ${option}`,
		end: "|"
	},
	responses: {
		correct: null,
		incorrect: `Please input the number that represents your selection`
	},
	execution: null
};