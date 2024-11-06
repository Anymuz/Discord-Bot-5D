// ABSTRACT CLASS InterfaceResponse: Used to enforce methods on all response objects.
// ---------------------------------------------------------------------------------- //
export class InterfaceResponse {
    constructor(){if(new.target === InterfaceResponse){throw new Error("ABSTRACT CLASS: InterfaceResponse => Cannot instantiate ABSTRACT.")}};
    // Getters:
    getPositive(){return this.positive};
    getNegative(){return this.negative};
    // ------//
    // Setters:
    setPositive(positiveIn){this.positive=positiveIn};
    setNegative(negativeIn){this.negative=negativeIn};
    // ------//
};
// ---------------------------------------------------------------------------------- //
// IHERITED CLASSES:
// ----------------- //
// CLASS  ExecutionResponse: Execution options must contain a positive and negative response.
// ------------------------------------------------------------------------------------------ //
export class ExecutionResponse extends InterfaceResponse {
    constructor(sucessMessage,errorMessage){
        this.positive=sucessMessage;
        this.negative=errorMessage;
    };
    print(functioName){console.log(`${functioName}: ${this.sucessMessage}`)};
    printErr(functioName){console.log(`ERROR ${functioName}: ${this.errorMessage}`)};
};
// ----------------------------------------------------------------------------------------- //
// CLASS  MenuResponse: Each menu has to be assigned at least one negative response for input error.
// ------------------------------------------------------------------------------------------------- //
export class MenuResponse extends InterfaceResponse {
    constructor(errorMessage=`Error!`){this.negative=errorMessage};
    printError(){console.log(this.negative)};
};
// ------------------------------------------------------------------------------------------------- //
// CLASS  ReplyResponse: A redirect option must contain a replyResponse to it being set.
// ------------------------------------------------------------------------------------- //
export class ReplyResponse extends InterfaceResponse {
    constructor(responseMessage){this.positive=responseMessage};
    print(){console.log(this.positive)};
};
// ------------------------------------------------------------------------------------- //
// ----------------- //
// Default export: Allows import of abstract InterfaceResponse as object to reference the inheritance classes.
// ----------------------------------------------------------------------------------------------------------- //
export default {ExecutionResponse,MenuResponse,ReplyResponse};
// ----------------------------------------------------------------------------------------------------------- //