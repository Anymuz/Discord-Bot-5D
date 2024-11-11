// Import Modules:
//---------------- //
import AbstractResponse from 'anymuz-interaction/AbstractResponse';
import Menu from 'anymuz-interaction/Menu'
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// CLASS Option: An interface menu option, can either call a function or script or redirect to another menu.
// --------------------------------------------------------------------------------------------------------- //
export default class MenuOption{
    // Constructor Method:
	// ------------------- //
    constructor(label,type,response,targetMenu,action=null){const VALLID_TYPES=['execution','redirection'];
        if(!VALLID_TYPES.includes(type)){throw new Error(`Invalid Type: ${type}, Option type must be either '${VALLID_TYPES.join(' or ')}'`)}
        else{this.type=TypeValidator.typeCheck(type,String)};
        this.label=TypeValidator.typeCheck(label,String);
        this.TargetMenu=TypeValidator.typeCheck(targetMenu,Menu);
        if(this.type==='execution'){this.action=TypeValidator.typeCheck(action,Function);
            this.response=TypeValidator.typeCheck(response,AbstractResponse.ExecutionResponse)}
        else{this.redirection=TypeValidator.typeCheck(targetMenu,Menu);
            this.response=TypeValidator.typeCheck(response,AbstractResponse.RedirectResponse)}};
    // ------------------- //
    // Functional methods:
    //-------------------- //
    // Method execute() - Executes out the selected MenuOption:
    async execute(){if(this.type==='execution'&&this.action){this.response.setPositive('Executed.');
            this.action();
            this.response.print(this.label)
            this.TargetMenu.start()}
        else if(this.type==='redirection'&&this.redirection){this.response.setPositive(`Selected: ${this.TargetMenu.Display.getHeading()}`);
            this.response.print();
            this.TargetMenu.start()}
        else{this.response.setNegative('Invalid option type or missing target.');
            this.response.printError()}};
    //-------------------- //
};
// --------------------------------------------------------------------------------------------------------- //