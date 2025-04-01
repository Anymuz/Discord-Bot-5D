import TypeValidation from 'anymuz-interface/TypeValidation';
// ------------------------------------------------------------------------------------------------------ //
/**
 * Abstract base class for responses.
 * @class InterfaceResponse
 * @abstract
 * @property {string} positive Positive response.
 * @property {string} negative Negative response.
 */
export class InterfaceResponse {
    /** @throws {Error} If instantiated directly. */
    constructor() {
        if (new.target === InterfaceResponse) throw new Error("Cannot instantiate abstract class.");
        this.positive = "Action succeeded."; 
        this.negative = "Action failed.";
    };

    /** @returns {string} Positive response. */
    getPositive() { return this.positive; };

    /** @returns {string} Negative response. */
    getNegative() { return this.negative; };

    /** @param {string} positiveIn New positive message. */
    setPositive(positiveIn) { this.positive = TypeValidation.typeCheck(positiveIn, String) };

    /** @param {string} negativeIn New negative message. */
    setNegative(negativeIn) { this.negative = TypeValidation.typeCheck(negativeIn, String) };
};
// ------------------------------------------------------------------------------------------------------ //
/**
 * Execution response class.
 * @class ExecutionResponse
 * @extends InterfaceResponse
 */
export class ExecutionResponse extends InterfaceResponse {
    /** @param {string} successMessage Positive response. @param {string} errorMessage Negative response. */
    constructor(successMessage, errorMessage) {
        super();
        this.positive = TypeValidation.typeCheck(successMessage, String);
        this.negative = TypeValidation.typeCheck(errorMessage, String);
    };

    /** @param {string} functionName Function name. */
    print(functionName) { console.log(`${functionName}: ${this.positive}`) };

    /** @param {string} functionName Function name. */
    printErr(functionName) { console.error(`ERROR ${functionName}: ${this.negative}`) };
};
// ------------------------------------------------------------------------------------------------------ //
/**
 * Menu-specific response.
 * @class MenuResponse
 * @extends InterfaceResponse
 */
export class MenuResponse extends InterfaceResponse {
    /** @param {string} errorMessage Error message (default: "Error!"). */
    constructor(errorMessage = "Error!") {
        super();
        this.negative = TypeValidation.typeCheck(errorMessage, String);
    };

    /** Logs the negative response. */
    printError() { console.error(this.negative) };
};
// ------------------------------------------------------------------------------------------------------ //
/**
 * Redirection response class.
 * @class RedirectResponse
 * @extends InterfaceResponse
 */
export class RedirectResponse extends InterfaceResponse {
    /** @param {string|null} responseMessage Redirect message (default: null). */
    constructor(responseMessage = null) {
        super();
        this.positive = responseMessage ? TypeValidation.typeCheck(responseMessage, String) : null;
    };

    /** Logs the positive response or fallback message. */
    print() { console.log(this.positive || "Redirection") };
};
// ------------------------------------------------------------------------------------------------------ //
export default { ExecutionResponse, MenuResponse, RedirectResponse };
// ------------------------------------------------------------------------------------------------------ //