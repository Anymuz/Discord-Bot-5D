/**
 * Utility class for string operations.
 * @class StringOperation
 * @example
 * const result = StringOperation.padString(20, "-", "Title");
 * console.log(result); // Outputs: "[-----Title-----]"
 */
const StringOperation = {
    /**
     * Generates a string of repeated characters with an even length.
     * @param {number} length - The length of the output string.
     * @param {string} character - The character to repeat.
     * @returns {string} The repeated character string.
     * @throws {Error} Throws an error if the length is not even.
     * @public
     */
    charEvenString(length, character) {
        if (length % 2 !== 0) {
            throw new Error("Length must be even.");
        }
        return character.repeat(length);
    },

    /**
     * Checks if a string has a specific length.
     * @param {string} string - The string to check.
     * @param {number} length - The desired length.
     * @returns {boolean} True if the string matches the length, otherwise false.
     * @public
     */
    checkLength(string, length) {
        return string.length === length;
    },

    /**
     * Pads a string with a character to a specified length, encasing it with specified characters.
     * @param {number} length - The total length of the output string.
     * @param {string} padChar - The character used for padding.
     * @param {string} [title=""] - The title to be padded.
     * @param {string[]} [encasing=["[", "]"]] - Characters to encase the title.
     * @returns {string} The padded and encased string.
     * @example
     * const result = StringOperation.padString(20, "-", "Title");
     * console.log(result); // Outputs: "[-----Title-----]"
     * @public
     */
    padString(length, padChar, title = "", encasing = ["[", "]"]) {
        const padding = padChar.repeat((length - title.length) / 2);
        return `${encasing[0]}${padding}${title}${padding}${encasing[1]}`;
    }
};

export default StringOperation;
