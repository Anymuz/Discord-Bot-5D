// Import Modules:
//---------------- //
import Menu from 'anymuz-interface/Menu';
import OptionsDisplay from 'anymuz-interface/OptionsDisplay';
import StringOperation from 'anymuz-interface/StringOperation';
import TypeValidation from 'anymuz-interface/TypeValidation';
//---------------- //
// CLASS Display: Handles displaying the menu to the user.
// ------------------------------------------------------- //
/** Class managing menu display with heading and options.
 * @class Display @module Display @property {string} heading Main heading text. @property {string} text Subtitle text. @property {string} encasing Characters used to encase headings.
 * @property {string} filler Character for filling lines. @property {number} line_size Length of each line in the display. 
 * @property {OptionsDisplay} OptionsDisplay Instance used to format display options. @throws {TypeError} Throws an error if input types are incorrect. */
export default class Display{
    // Constructor Method:
    // ------------------- //
    /** Initializes Display properties.
     * @public @constructor @param {string} heading Main heading text. @param {string} subText Subtitle text.
     * @param {OptionsDisplay} optionsDisplay OptionsDisplay instance for formatting options.
     * @param {string} [encasing='[]'] Characters used to encase headings, default is '[]'. @param {string} [fillChar='-'] Character for filling lines, default is '-'.
     * @param {number} [lineLength=64] Length of each line in the display, default is 64. */
    constructor(heading,subText,optionsDisplay,encasing='[]',fillChar='-',lineLength=64){this.encasing=TypeValidation.stringCheck(encasing,2),
        this.filler=TypeValidation.stringCheck(fillChar,1),
        this.heading=TypeValidation.typeCheck(heading,String),
        this.text=TypeValidation.typeCheck(subText,String),
        this.line_size=TypeValidation.numberCheck(lineLength,TypeValidation.type_integer),
        this.line_spacer=StringOperation.charEvenString(this.line_size,this.filler),
        this.OptionsDisplay=TypeValidation.typeCheck(optionsDisplay,OptionsDisplay),
        this.prompt=``};
    // ------------------- //
    // Utility Methods:
    // ---------------- //
    /** Retrieves the encasing characters. @public @returns {string} Encasing characters for display heading. */
    getEncasing(){return this.encasing}
    /** Retrieves the heading text. @public @returns {string} Heading text. */
    getHeading(){return this.heading};
    /** Retrieves the line spacing for heading format. @public @returns {string} Line spacing. */
    getLineSpacer(){return this.line_spacer};
    /** Retrieves the subheading text. @public @returns {string} Subheading text. */
    getText(){return this.text};
    /** Sets the heading text. @public @param {string} heading New heading text. */
    setHeading(heading){this.heading=heading};
    /** Sets line spacing character. @public @param {string} [fillChar=this.filler] Character for filling the line spacing, optional. */
    setLineSpacer(fillChar=this.filler){this.filler=TypeValidation.stringCheck(fillChar,1);
        this.line_spacer=StringOperation.charEvenString(this.line_size,this.filler)};
    /** Sets subheading text. @public @param {string} text New text for subheading. */
    setText(text){this.text=TypeValidation.typeCheck(text,String)};
    // --------------//
    // Internal Methods:
    // ----------------- //
    // Method setPrompt(menu) - Takes a Menu object as input and then determines the right prompt:
    /** Sets the prompt based on menu properties.
	 *  @private @param {Menu} menu Menu instance for which the prompt is set. @throws {Error} Throws an error if `nameInput` is not set correctly. */
    #setPrompt(menu){menu=TypeValidation.typeCheck(menu,Menu);
        if (menu.name_input){this.prompt=`Please input answer: `}
        else if(!menu.name_input){this.prompt=`Please input corresponding number: `}
        else{throw new Error(`An error has occurred, nameInput has not been set correctly!`)}};
    // Method showPrompt() - Use readline to prompt user input:
    /** Prompts the user for input. @private @param {Menu} menu Menu instance to interact with. @returns {Promise<string>} Resolves with the user's input. */
    #showPrompt(menu){return new Promise((resolve)=>{let target=menu.target;menu.UserInterface.question(this.prompt,{target},(userInput)=>{resolve(userInput)})})};
    // ----------------- //
    // Functional Methods:
    // ------------------- //
    // Method displayHeading(encasing,filler) - Formats and outputs the heading as the menu title:
    /** Displays formatted heading.
     * @public @param {string} [encasing=this.encasing] Encasing character, optionals. @param {string} [filler=this.filler] Filler character for line, optional.
     * @example display.displayHeading(); // Logs heading to console. */
    displayHeading(encasing=this.encasing,filler=this.filler){this.encasing=TypeValidation.stringCheck(encasing,2);
        this.filler=TypeValidation.stringCheck(filler,1);
        const base_heading=StringOperation.padString(this.line_size,this.filler,this.heading,this.encasing);
        console.log(base_heading)};
    // Method displayText() - Outputs the subheading text for the menu:
    /** Displays subheading text. @public @example display.displayText(); // Logs subheading to console. */
    displayText(){console.log(this.text)};
    // Method present(menu, options) - Displays the Menu object passed in as parameter:    
    /** Presents the menu and prompts for user input.
     * @public @async @param {Menu} menu Menu instance to display. @returns {Promise<string>} Resolves with the user's input after display.
     * @example const userInput = await display.present(menu); */
    async present(menu){menu=TypeValidation.typeCheck(menu,Menu);
        this.#setPrompt(menu);
        this.displayHeading();
        this.displayText();
        this.OptionsDisplay.displayOptions(menu);
        let userInput=await this.#showPrompt(menu);
        return userInput};
    // Method setOptionsDisplay(OptionsDisplay) - Assigns an OptionsDisplay object to this display:
    /** Sets the options display. @public @param {OptionsDisplay} optionsDisplay Instance of OptionsDisplay for formatting. */
    setOptionsDisplay(optionsDisplay){this.optionsDisplay=TypeValidation.typeCheck(optionsDisplay,OptionsDisplay)}};
    // ------------------- //
// ------------------------------------------------------- //