// Import Modules:
//---------------- //
import AbstractResponse from 'anymuz-interaction/AbstractResponse';
import Menu from 'anymuz-interaction/Menu'
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// CLASS Option: An interface menu option, can either call a function or script or redirect to another menu.
// --------------------------------------------------------------------------------------------------------- //
export default class Option {
    constructor(label,type,response,action=null,targetMenu=null){const VALLID_TYPES=['execution','redirection'];
        if(!VALLID_TYPES.includes(type)){throw new Error(`Invalid Type: ${type}, Option type must be either '${VALLID_TYPES.join(' or ')}'`)};
        this.label=TypeValidator.typeCheck(label, String); 
        this.type=TypeValidator.typeCheck(type, Boolean); 
        if(this.type==='execution'){this.action=TypeValidator.typeCheck(action,typeof(String()));
            this.response=TypeValidator.typeCheck(response,AbstractResponse.ExecutionResponse)}
            else{this.redirection=TypeValidator.typeCheck(targetMenu,Menu);
            this.response=TypeValidator.typeCheck(response,AbstractResponse.ReplyResponse)}};

    execute() {
        if (this.type === 'execution' && this.action) {
            this.response.setPositive('Action executed successfully');
            this.action();
            this.response.print();
        } else if (this.type === 'redirection' && this.redirection) {
            this.response.setPositive('Redirecting...');
            this.response.print();
            this.targetMenu.display();
        } else {
            this.response.setNegative('Invalid option type or missing target.');
            this.response.printError();
        }
    }
};
// --------------------------------------------------------------------------------------------------------- //