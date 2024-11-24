// Import Modules:
//---------------- //
import TypeValidation from 'anymuz-interface/TypeValidation';
//---------------- //
// ABSTRACT CLASS InterfaceResponse: Used to enforce methods on all response objects.
// ---------------------------------------------------------------------------------- //
/** Abstract class enforcing methods on all response objects.
 * @class InterfaceResponse @abstract Cannot instantiate @module InterfaceResponse 
 * @property {string} positive Positive response message. @property {string} negative Negative response message. @throws {Error} Throws an error if instantiated directly. */
export class InterfaceResponse{
    // Constructor Method:
    // ------------------- //
    /** Constructor for InterfaceResponse. @public @constructor */
    constructor(){if(new.target===InterfaceResponse){throw new Error("ABSTRACT CLASS: InterfaceResponse => Cannot instantiate ABSTRACT.")}};
    // ------------------- //
    // Utility Methods: 
    //----------------- //
    /** Retrieves the positive response text. @public @returns {string} Positive response. */
    getPositive(){return this.positive};
    /** Retrieves the negative response text. @public @returns {string} Negative response. */
    getNegative(){return this.negative};
    /** Sets positive response. @public @param {string} positiveIn Message for positive response. @throws {TypeError} Throws an error if `positiveIn` is not a string. */
    setPositive(positiveIn){this.positive=TypeValidation.typeCheck(positiveIn,String)};
    /** Sets negative response. @public @param {string} negativeIn Message for negative response. @throws {TypeError} Throws an error if `negativeIn` is not a string. */
    setNegative(negativeIn){this.negative=TypeValidation.typeCheck(negativeIn,String)}};
    //----------------- //
// ---------------------------------------------------------------------------------- //
// INHERITED CLASSES:
// ----------------- //
// CLASS  ExecutionResponse: Execution options must contain a positive and negative response.
// ------------------------------------------------------------------------------------------ //
/** Class for execution responses with success and error messages.
 * @class ExecutionResponse @extends InterfaceResponse @memberof InterfaceResponse 
 * @property {string} positive Success message for execution. @property {string} negative Error message for execution. */
export class ExecutionResponse extends InterfaceResponse{
    /** Sets success and error messages. 
     *  @public @constructor @param {string} successMessage Success message. @param {string} errorMessage Error message.
     *  @throws {TypeError} Throws an error if `successMessage` or `errorMessage` are not strings. */
    constructor(successMessage,errorMessage){super(),this.positive=TypeValidation.typeCheck(successMessage,String),this.negative=TypeValidation.typeCheck(errorMessage,String)};
    /** Prints the success message.
     * @public @param {string} functionName Function name. @example const response = new ExecutionResponse("Success!", "Error!"); 
     * response.print("FunctionName"); // Logs: "FunctionName: Success!" */
    print(functionName){console.log(`${functionName}: ${this.positive}`)};
    /** Prints the error message.
     * @public @param {string} functionName Function name. @example const response = new ExecutionResponse("Success!", "Error!");
     * response.printErr("FunctionName"); // Logs: "ERROR FunctionName: Error!"  */
    printErr(functionName){console.log(`ERROR ${functionName}: ${this.negative}`)}};
// ----------------------------------------------------------------------------------------- //
// CLASS  MenuResponse: Each menu has to be assigned at least one negative response for input error.
// ------------------------------------------------------------------------------------------------- //
/** Class for menu-specific error responses. @class MenuResponse @extends InterfaceResponse @memberof InterfaceResponse @property {string} negative Default error message for the menu. */
export class MenuResponse extends InterfaceResponse{
    /** Sets the error message. @public @constructor @param {string} errorMessage Default error message, default is 'Error!'. @throws {TypeError} Throws an error if `errorMessage` is not a string. */
    constructor(errorMessage=`Error!`){super(),this.negative=TypeValidation.typeCheck(errorMessage,String)};
    /** Prints the error message.
     * @public @example const response = new MenuResponse("Invalid option selected.");
     * response.printError(); // Logs: "Invalid option selected."  */
    printError(){console.log(this.negative)}};
// ------------------------------------------------------------------------------------------------- //
// CLASS  RedirectResponse: A redirect option must contain a redirectResponse to it being set.
// ------------------------------------------------------------------------------------- //
/** Class for handling redirection messages. @class RedirectResponse @extends InterfaceResponse @memberof InterfaceResponse @property {string} positive Success message for redirection. */
export class RedirectResponse extends InterfaceResponse{
    /** Sets redirection message. 
     * @public @constructor @param {string|null} responseMessage Initalised message for redirection, optional.
     * @throws {TypeError} Throws an error if `responseMessage` is not a string or null. */
    constructor(responseMessage=null){super(),this.positive=responseMessage?TypeValidation.typeCheck(responseMessage,String):null};
    /** Prints the redirection message.
     * @public @example const response = new RedirectResponse("Redirecting...");
     * response.print(); // Logs: "Redirecting..." */
    print(){console.log(this.positive)}};
// ------------------------------------------------------------------------------------- //
// ----------------- //
// Default export: Allows import of abstract InterfaceResponse as object to reference the inheritance classes.
// ----------------------------------------------------------------------------------------------------------- //
export default {ExecutionResponse,MenuResponse,RedirectResponse};
// ----------------------------------------------------------------------------------------------------------- //
