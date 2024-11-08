// Import Modules:
//---------------- //
import Menu from 'anymuz-interaction/Menu';
import OptionsDisplay from 'anymuz-interaction/OptionsDisplay';
import StringOperation from '#internal/StringOperation';
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// CLASS Display: Handles displaying the menu to the user.
// ------------------------------------------------------- //
export default class Display{
	// Constructor Method:
	// ------------------- //
    constructor(heading,subText,optionsDisplay,encasing='[]',fillChar='-',lineLength=64){this.encasing=TypeValidator.stringCheck(encasing,2),
		this.filler=TypeValidator.stringCheck(fillChar,1),	
        this.heading=TypeValidator.typeCheck(heading,String),
		this.text=TypeValidator.typeCheck(subText,String),
		this.line_size=TypeValidator.numberCheck(lineLength,TypeValidator.type_integer),
		this.line_spacer=StringOperation.charEvenString(this.line_size,this.filler),
		this.OptionsDisplay=TypeValidator.typeCheck(optionsDisplay,OptionsDisplay),
		this.prompt=``};
	// ------------------- //
    // Utility Methods:
    // ---------------- //
	getEncasing(){return this.encasing}
    getHeading(){return this.heading};
	getLineSpacer(){return this.line_spacer};
    getText(){return this.text};
    setHeading(heading){this.heading=heading};
	setLineSpacer(fillChar=this.filler){this.filler=TypeValidator.stringCheck(fillChar,1);
		this.line_spacer=StringOperation.charEvenString(this.line_size,this.filler)};
    setText(text){this.text=TypeValidator.typeCheck(text,String)};
    // --------------//
	// Internal Methods:
    // ----------------- //
	// Method setPrompt(menu) - Takes a Menu object as input and then determines the right prompt:
	#setPrompt(menu){menu=TypeValidator.typeCheck(menu,Menu);
		if (menu.name_input){this.prompt=`Please input answer: `}
		else if(!menu.name_input){this.prompt=`Please input corresponding number: `}
		else{throw new Error(`An error has occured, nameInput has not be set correctly!`)}};
	// Method showPrompt() - Use readline to prompt user input:
	#showPrompt(menu){return new Promise((resolve)=>{let target=menu.target;
		menu.UserInterface.question(this.prompt,{target},(userInput)=>{resolve(userInput)})})};
	//#showPrompt(menu){menu.UserInterface.question(this.prompt,(userInput)=>{userInput})};
	// ----------------- //
    // Functional Methods:
    // ------------------- //
	// Method displayHeading(encasing,filler) - Formats and outputs the heading as the menu title:
	displayHeading(encasing=this.encasing,filler=this.filler){this.encasing=TypeValidator.stringCheck(encasing,2);
		this.filler=TypeValidator.stringCheck(filler,1);
		const base_heading=StringOperation.padString(this.line_size,this.filler,this.heading,this.encasing);
		console.log(base_heading)};
	// Method displayText() - Outputs the subheading text for the menu:
	displayText(){console.log(this.text)};
	// Method present(menu, options) - Displays the Menu object passed in as parameter:	
    async present(menu){menu=TypeValidator.typeCheck(menu,Menu);
		this.#setPrompt(menu);
		this.displayHeading();
		this.displayText();
		this.OptionsDisplay.displayOptions(menu);
		let userInput=await this.#showPrompt(menu);
		return userInput};
	// Method setOptionsDisplay(OptionsDisplay) - Assigns an OptionsDisplay object to this display:
	setOptionsDisplay(optionsDisplay){this.optionsDisplay=TypeValidator.typeCheck(optionsDisplay,OptionsDisplay)}};
    // ------------------- //
// ------------------------------------------------------- //









	// #processUserInput(menu){let user_input=this.#showPrompt(callback=>{return callback});
	// 	let chosen;
	// 	if(menu.name_input){for(let choice of [index,menu.options]){choice=TypeValidator.typeCheck(choice,Option);
	// 		if(choice==user_input){chosen=TypeValidator.typeCheck(choice,Option);
	// 			return{choice}}else{chosen=false;
	// 		this.menu.menuResponse.setNegative(`${choice} is not a valid option, please enter the exact name of the chosen option.`)}}}
	// 	else if(!menu.name_input){for(let choice in this.options){choice=TypeValidator.typeCheck(choice,Option)
	// 		if(choice==user_input){chosen=TypeValidator.typeCheck(choice,Option);
	// 			return{choice}}else{chosen=false;
	// 		this.menu.menuResponse.setNegative(`${choice} is not a valid option, please enter a number that corresponds to the chosen option.`);
	// 	}}}else{throw new Error(`An error has occured, nameInput has not been set correctly!`)}};

// const mainMenuDisplay = {
// 	heading: "---------[Bot Launch Controller]---------",
// 	text: `
// 		Use this to activate the bots, remember to use deploy if commands are new or changed. You can input -1 at any time to return to this menu.\n
// 		There will be additional features coming soon.
// 	`,
// 	options: [
// 		"Deploy Bot Commands",
// 		"Launch Bot",
// 		"Generate Bot",
// 		"Generate Command",
// 		"Command Packages"
// 	],
// 	display: {
// 		start: "",
// 	//	main: `| ${index}: ${option}`,
// 		end: "|"
// 	},
// 	responses: {
// 		correct: null,
// 		incorrect: `Please input the number that represents your selection`
// 	},
// 	execution: null
// };