import Menu from "anymuz-interaction/Menu";
import { OptionsDisplay } from "anymuz-interaction/OptionsDisplay";
import typeValidator from "#internal/type-validation";

// CLASS Display: Handles displaying the menu to the user.
// -----------------------------------------------------//
export class Display {
    constructor(heading, text){	
        this.heading = typeValidator.typeCheck(heading, String);
        this.optionsDisplay = null; // Initialize displayOption as null or another value as needed
        this.prompt = ``;
        this.text = typeValidator.typeCheck(text, String);
    };
    // Utility Methods:
    // --------------//
    getHeading(){return this.heading};
    getText(){return this.text};
    setHeading(heading){this.heading=heading};
    setText(text){this.text=typeValidator.typeCheck(text, String)};
    // --------------//
    // Functional Methods:
    // -----------------//
    present(menu, options){
		options = typeValidator.typeCheckArray(options,Option);
		menu = typeValidator.typeCheck(menu, Menu);
		this.#setPrompt(menu);
		
		let userInput = this.#showPrompt((callback) =>{return callback})
		return userInput;
        // function here to use display heading and text and use optionsDisplay
    };
	//setMenu(menu){this.menu=typeCheck(menu,Menu)};
    setOptionsDisplay(optionsDisplay){this.optionsDisplay=typeValidator.typeCheck(optionsDisplay,OptionsDisplay)};
	#setPrompt(menu){menu = typeCheck(menu, Menu);
		if (menu.nameInput){this.prompt=`Please input answer: `}
        else if(!menu.nameInput){this.prompt=`Please input corresponding number: `}
        else{throw new Error(`An error has occured, nameInput has not be set correctly!`)}};
	#showPrompt(callback){this.userInterface.question(this.prompt,(userInput)=>{callback(userInput)})};
	formatHeading(){ 
		const base_header=`----------------------------------------------------------------`; //64 // Consider adding more options like this.paddingchar.
		console.log(base_header)
		let half_header = base_header.slice(0, 32);
		let display_heading;
		let split_index=this.heading.length/2
		let mid_char=this.heading.charAt((this.heading.length)/2)
		let front_half=`[${this.heading.slice(0,split_index)}`;
		let back_half=`${this.heading.slice(split_index,this.heading.length)}]`;
		half_header=half_header.slice(0,0-(front_half.length));
		if (this.heading.length % 2 != 0){
			display_heading=half_header.slice(0,-1)+front_half+mid_char+back_half.slice(1)+half_header;
		} else {
			display_heading=half_header+front_half+back_half+half_header;
		}
		return display_heading;		
	}
		// const askQuestion = (question, callback) => {
		// 	userInterface.question(question, (answer) => {
		// 		callback(answer)
		// 	})
		// };


	#processUserInput(){let userInput=this.#showPrompt(callback=>{return callback});
		var chosen;
		if(this.nameInput){for(let choice of [index,this.options]){choice=typeCheck(choice,Option);
			if(choice==userInput){chosen=typeCheck(choice,Option);
			break}else{chosen=false;
			this.menu.menuResponse.setNegative(`Choice is not a valid option, please enter the exact name of the chosen option.`);}}}
		else if(!this.nameInput){for(let choice in this.options){choice=typeCheck(choice,Option);
			if(choice==userInput){chosen=typeCheck(choice,Option);
			break}else{chosen=false;
			this.menu.menuResponse.setNegative(`Choice is not a valid option, please enter a number that corresponds to the chosen option.`);
		}}}else{throw new Error(`An error has occured, nameInput has not been set correctly!`)};
		return{choice}};
	// ----------------//
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