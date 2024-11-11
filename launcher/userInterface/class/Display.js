// Import Modules:
//---------------- //
import Menu from 'anymuz-interface/Menu';
import OptionsDisplay from 'anymuz-interface/OptionsDisplay';
import StringOperation from '#internal/StringOperation';
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// CLASS Display: Handles displaying the menu to the user.
// ------------------------------------------------------- //
/** Class managing menu display with heading and options. */
export default class Display{
	// Constructor Method:
	// ------------------- //
    /** Initializes Display properties. @param {string} heading - Main heading. @param {string} subText - Subtitle text. */
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
	/** @returns {string} Encasing characters. */
	getEncasing(){return this.encasing}
    /** @returns {string} Heading text. */
    getHeading(){return this.heading};
	/** @returns {string} Line spacer. */
	getLineSpacer(){return this.line_spacer};
    /** @returns {string} Subheading text. */
    getText(){return this.text};
    /** Sets the heading. @param {string} heading - New heading. */
    setHeading(heading){this.heading=heading};
	/** Sets the line spacer. @param {string} [fillChar] - Filler character. */
	setLineSpacer(fillChar=this.filler){this.filler=TypeValidator.stringCheck(fillChar,1);
		this.line_spacer=StringOperation.charEvenString(this.line_size,this.filler)};
    /** Sets subheading text. @param {string} text - New text. */
    setText(text){this.text=TypeValidator.typeCheck(text,String)};
    // --------------//
	// Internal Methods:
    // ----------------- //
	// Method setPrompt(menu) - Takes a Menu object as input and then determines the right prompt:
	/** Sets the prompt based on menu properties. @param {Menu} menu - Menu instance. */
	#setPrompt(menu){menu=TypeValidator.typeCheck(menu,Menu);
		if (menu.name_input){this.prompt=`Please input answer: `}
		else if(!menu.name_input){this.prompt=`Please input corresponding number: `}
		else{throw new Error(`An error has occured, nameInput has not be set correctly!`)}};
	// Method showPrompt() - Use readline to prompt user input:
	/** Prompts the user for input. @param {Menu} menu - Menu instance. @returns {Promise<string>} User input. */
	#showPrompt(menu){return new Promise((resolve)=>{let target=menu.target;
		menu.UserInterface.question(this.prompt,{target},(userInput)=>{resolve(userInput)})})};
	//#showPrompt(menu){menu.UserInterface.question(this.prompt,(userInput)=>{userInput})};
	// ----------------- //
    // Functional Methods:
    // ------------------- //
	// Method displayHeading(encasing,filler) - Formats and outputs the heading as the menu title:
	/** Displays formatted heading. @param {string} [encasing] - Encasing characters. @param {string} [filler] - Filler character. */
	displayHeading(encasing=this.encasing,filler=this.filler){this.encasing=TypeValidator.stringCheck(encasing,2);
		this.filler=TypeValidator.stringCheck(filler,1);
		const base_heading=StringOperation.padString(this.line_size,this.filler,this.heading,this.encasing);
		console.log(base_heading)};
	// Method displayText() - Outputs the subheading text for the menu:
	/** Displays subheading text. */
	displayText(){console.log(this.text)};
	// Method present(menu, options) - Displays the Menu object passed in as parameter:	
    /** Presents the menu and prompts for user input. @param {Menu} menu - Menu instance. @returns {Promise<string>} User input. */
    async present(menu){menu=TypeValidator.typeCheck(menu,Menu);
		this.#setPrompt(menu);
		this.displayHeading();
		this.displayText();
		this.OptionsDisplay.displayOptions(menu);
		let userInput=await this.#showPrompt(menu);
		return userInput};
	// Method setOptionsDisplay(OptionsDisplay) - Assigns an OptionsDisplay object to this display:
	/** Sets the options display. @param {OptionsDisplay} optionsDisplay - Options display instance. */
	setOptionsDisplay(optionsDisplay){this.optionsDisplay=TypeValidator.typeCheck(optionsDisplay,OptionsDisplay)}};
    // ------------------- //
// ------------------------------------------------------- //
