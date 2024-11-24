// Import Modules:
//---------------- //
import {InterfaceResponse, ExecutionResponse, RedirectResponse} from 'anymuz-interface/InterfaceResponse';
import Menu from 'anymuz-interface/Menu'
import TypeValidation from 'anymuz-interface/TypeValidation';
//---------------- //
// CLASS MenuOption: An interface menu option, can either call a function or script or redirect to another menu.
// --------------------------------------------------------------------------------------------------------- //
/** Class representing an interface menu option that can execute an action or redirect.
 * @class MenuOption @module MenuOption
 * @property {string} type - Option type (execution or redirection). @property {string} label - Label for the option. @property {Menu} TargetMenu - Target menu for redirection.
 * @property {Function} action - Function to execute for this option. @property {InterfaceResponse} response - Response instance for handling execution or redirection. */
export default class MenuOption {
    // Constructor Method:
	// ------------------- //
    /** Initializes MenuOption properties.
     * @public @constructor 
     * @param {string} label Option label. @param {string} type Option type ('execution' or 'redirection'). @param {InterfaceResponse} response Response instance for handling the option.
     * @param {Menu} targetMenu Target menu instance for redirection. @param {Function} [action=null] Function to execute, used only if type is 'execution'. 
     * @throws {Error} Throws an error if the option type is invalid. */
    constructor(label,type,response,targetMenu,action=null){const VALLID_TYPES=['execution','redirection'];
        if(!VALLID_TYPES.includes(type)){throw new Error(`Invalid Type: ${type}, Option type must be either '${VALLID_TYPES.join(' or ')}'`)}
        else{this.type=TypeValidation.typeCheck(type,String)};
        this.label=TypeValidation.typeCheck(label,String);
        this.TargetMenu=TypeValidation.typeCheck(targetMenu,Menu);
        if(this.type==='execution'){this.action=TypeValidation.typeCheck(action,Function);
            this.response=TypeValidation.typeCheck(response,ExecutionResponse)}
        else{this.redirection=TypeValidation.typeCheck(targetMenu,Menu);
            this.response=TypeValidation.typeCheck(response, RedirectResponse)}};
    // ------------------- //
    // Functional methods:
    //-------------------- //
    // Method execute() - Executes out the selected MenuOption:
    /** Executes the menu option based on its type. 
     * @public @async @returns {Promise<void>} Resolves when the option action or redirection is complete. @example const response = new AbstractResponse(); 
     * const targetMenu = new Menu(display, optionsArray, false);
     * const actionOption = new MenuOption("Execute Action", "execution", response, targetMenu, () => console.log("Action executed"));
     * await actionOption.execute(); */
    async execute(){if(this.type==='execution'&&this.action){this.response.setPositive(`Executed ${this.action.name}`);
        this.action()
        this.response.print(this.label)
        this.TargetMenu.start()}
        else if(this.type==='redirection'&&this.redirection){this.response.setPositive(`Selected: ${this.TargetMenu.Display.getHeading()}`);
            this.response.print();
            this.TargetMenu.start()}
        else{this.response.setNegative('Invalid option type or missing target.');
            this.response.printError()}}};
    //-------------------- //
// --------------------------------------------------------------------------------------------------------- //
