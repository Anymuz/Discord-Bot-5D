/**
 * Utility class for type validation.
 * @class TypeValidation
 * @example
 * TypeValidation.numberCheck(42, "integer"); // Passes
 * TypeValidation.stringCheck("Test", 4); // Passes
 */
const TypeValidation = {
    /**
     * Validates whether a number matches the specified type.
     * @param {number} value - The number to validate.
     * @param {string} type - The expected type ("integer" or "float").
     * @returns {boolean} True if the validation passes.
     * @throws {Error} Throws an error if the validation fails.
     * @public
     */
    numberCheck(value, type) {
        const isInteger = Number.isInteger(value);
        if (type === "integer" && !isInteger) {
            throw new Error("Value must be an integer.");
        }
        if (type === "float" && isInteger) {
            throw new Error("Value must be a float.");
        }
        return true;
    },

    /**
     * Validates whether a string matches a specific length.
     * @param {string} string - The string to validate.
     * @param {number} length - The required length.
     * @returns {boolean} True if the validation passes.
     * @throws {Error} Throws an error if the length does not match.
     * @public
     */
    stringCheck(string, length) {
        if (string.length !== length) {
            throw new Error(`String must have a length of ${length}.`);
        }
        return true;
    },

    /**
     * Validates whether a value is of the expected type.
     * @param {*} value - The value to validate.
     * @param {Function} expectedType - The constructor of the expected type.
     * @returns {boolean} True if the value matches the expected type.
     * @throws {Error} Throws an error if the value does not match the expected type.
     * @public
     */
    typeCheck(value, expectedType) {
        if (!(value instanceof expectedType)) {
            throw new Error(`Value is not of type ${expectedType.name}.`);
        }
        return true;
    }
};

export default TypeValidation;
