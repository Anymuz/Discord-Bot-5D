// Import Modules:
//---------------- //
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// ABSTRACT CLASS InterfaceResponse: Used to enforce methods on all response objects.
// ---------------------------------------------------------------------------------- //
export class InterfaceResponse{
    // Constructor Method:
	// ------------------- //
    constructor(){if(new.target===InterfaceResponse){throw new Error("ABSTRACT CLASS: InterfaceResponse => Cannot instantiate ABSTRACT.")}};
    // ------------------- //
    // Utility Methods: 
    //----------------- //
    getPositive(){return this.positive};
    getNegative(){return this.negative};
    setPositive(positiveIn){this.positive=TypeValidator.typeCheck(positiveIn,String)};
    setNegative(negativeIn){this.negative=TypeValidator.typeCheck(negativeIn,String)}};
    //----------------- //
// ---------------------------------------------------------------------------------- //
// IHERITED CLASSES:
// ----------------- //
// CLASS  ExecutionResponse: Execution options must contain a positive and negative response.
// ------------------------------------------------------------------------------------------ //
export class ExecutionResponse extends InterfaceResponse{
    constructor(sucessMessage,errorMessage){super(),this.positive=TypeValidator.typeCheck(sucessMessage,String),this.negative=TypeValidator.typeCheck(errorMessage,String)};
    print(functioName){console.log(`${functioName}: ${this.positive}`)};
    printErr(functioName){console.log(`ERROR ${functioName}: ${this.negative}`)}};
// ----------------------------------------------------------------------------------------- //
// CLASS  MenuResponse: Each menu has to be assigned at least one negative response for input error.
// ------------------------------------------------------------------------------------------------- //
export class MenuResponse extends InterfaceResponse{constructor(errorMessage=`Error!`){super(),this.negative=TypeValidator.typeCheck(errorMessage,String)};
    printError(){console.log(this.negative)}};
// ------------------------------------------------------------------------------------------------- //
// CLASS  RedirectResponse: A redirect option must contain a redirectResponse to it being set.
// ------------------------------------------------------------------------------------- //
export class RedirectResponse extends InterfaceResponse{constructor(responseMessage=null){super(),
    this.positive= responseMessage ? TypeValidator.typeCheck(responseMessage,String):null};
    print(){console.log(this.positive)}};
// ------------------------------------------------------------------------------------- //
// ----------------- //
// Default export: Allows import of abstract InterfaceResponse as object to reference the inheritance classes.
// ----------------------------------------------------------------------------------------------------------- //
export default {ExecutionResponse,MenuResponse,RedirectResponse};
// ----------------------------------------------------------------------------------------------------------- //