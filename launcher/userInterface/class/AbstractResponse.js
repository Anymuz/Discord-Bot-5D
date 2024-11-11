// Import Modules:
//---------------- //
import TypeValidator from '#internal/TypeValidation';
//---------------- //
// ABSTRACT CLASS InterfaceResponse: Used to enforce methods on all response objects.
// ---------------------------------------------------------------------------------- //
/** Abstract class enforcing methods on all response objects. */
export class InterfaceResponse{
    // Constructor Method:
	// ------------------- //
    /** Throws error if instantiated directly. */
    constructor(){if(new.target===InterfaceResponse){throw new Error("ABSTRACT CLASS: InterfaceResponse => Cannot instantiate ABSTRACT.")}};
    // ------------------- //
    // Utility Methods: 
    //----------------- //
    /** @returns {string} Positive response. */
    getPositive(){return this.positive};
    /** @returns {string} Negative response. */
    getNegative(){return this.negative};
    /** Sets positive response. @param {string} positiveIn - Message for positive response. */
    setPositive(positiveIn){this.positive=TypeValidator.typeCheck(positiveIn,String)};
    /** Sets negative response. @param {string} negativeIn - Message for negative response. */
    setNegative(negativeIn){this.negative=TypeValidator.typeCheck(negativeIn,String)}};
    //----------------- //
// ---------------------------------------------------------------------------------- //
// IHERITED CLASSES:
// ----------------- //
// CLASS  ExecutionResponse: Execution options must contain a positive and negative response.
// ------------------------------------------------------------------------------------------ //
/** Class for execution responses with success and error messages. */
export class ExecutionResponse extends InterfaceResponse{
    /** Sets success and error messages. @param {string} successMessage - Success message. @param {string} errorMessage - Error message. */
    constructor(successMessage,errorMessage){super(),this.positive=TypeValidator.typeCheck(successMessage,String),this.negative=TypeValidator.typeCheck(errorMessage,String)};
    /** Prints the success message. @param {string} functionName - Function name. */
    print(functionName){console.log(`${functionName}: ${this.positive}`)};
    /** Prints the error message. @param {string} functionName - Function name. */
    printErr(functionName){console.log(`ERROR ${functionName}: ${this.negative}`)}};
// ----------------------------------------------------------------------------------------- //
// CLASS  MenuResponse: Each menu has to be assigned at least one negative response for input error.
// ------------------------------------------------------------------------------------------------- //
/** Class for menu-specific error responses. */
export class MenuResponse extends InterfaceResponse{
    /** Sets the error message. @param {string} errorMessage - Default error message. */
    constructor(errorMessage=`Error!`){super(),this.negative=TypeValidator.typeCheck(errorMessage,String)};
    /** Prints the error message. */
    printError(){console.log(this.negative)}};
// ------------------------------------------------------------------------------------------------- //
// CLASS  RedirectResponse: A redirect option must contain a redirectResponse to it being set.
// ------------------------------------------------------------------------------------- //
/** Class for handling redirection messages. */
export class RedirectResponse extends InterfaceResponse{
    /** Sets redirection message. @param {string} responseMessage - Message for redirection. */
    constructor(responseMessage=null){super(),
    this.positive= responseMessage ? TypeValidator.typeCheck(responseMessage,String):null};
    /** Prints the redirection message. */
    print(){console.log(this.positive)}};
// ------------------------------------------------------------------------------------- //
// ----------------- //
// Default export: Allows import of abstract InterfaceResponse as object to reference the inheritance classes.
// ----------------------------------------------------------------------------------------------------------- //
export default {ExecutionResponse,MenuResponse,RedirectResponse};
// ----------------------------------------------------------------------------------------------------------- //
