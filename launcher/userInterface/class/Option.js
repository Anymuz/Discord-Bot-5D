import typeValidator from '#internal/type-validation';
import {ExecutionResponse,ReplyResponse} from 'anymuz-interaction/InterfaceResponse';
import Menu from 'anymuz-interaction/Menu'
import Option from 'anymuz-interaction/Option';

// Option class
export class Option {
    constructor(label, type, response, action = null, targetMenu = null) {
        const VALLID_TYPES=['execution','redirection'];
        if(!VALLID_TYPES.includes(type)){throw new Error(`Invalid Type: ${type}, Option type must be either '${VALLID_TYPES.join(' or ')}'`)};
        this.label = typeValidator.typeCheck(label, String); 
        this.type = typeValidator.typeCheck(type, Boolean); 
        if(this.type === 'execution'){
            this.action = typeValidator.typeCheck(action, typeof(String()));
            this.response = typeValidator.typeCheck(response, ExecutionResponse);
        }else{
            this.redirection=typeValidator.typeCheck(targetMenu, Menu);
            this.response=typeValidator.typeCheck(response, ReplyResponse);
        };
    }

    //if(!NUMBER_TYPES.includes(type))

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
}
// //