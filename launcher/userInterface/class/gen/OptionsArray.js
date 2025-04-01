/**
 * Custom array class for handling menu options.
 * @class OptionsArray
 * @extends Array
 * @example
 * const options = new OptionsArray();
 * options.push(new MenuOption("Option 1", "execution", response));
 * const option = options.findOptionByName("Option 1");
 * console.log(option); // Logs the matching MenuOption object
 */
class OptionsArray extends Array {
    /**
     * Constructs an OptionsArray.
     * @param {...MenuOption} options - Menu options to initialize with.
     * @public
     */
    constructor(...options) {
        super(...options);
        return new Proxy(this, {
            set(target, property, value) {
                if (!(value instanceof MenuOption)) {
                    throw new Error("All elements must be instances of MenuOption");
                }
                return Reflect.set(target, property, value);
            }
        });
    }

    /**
     * Finds a menu option by its label.
     * @param {string} name - The label of the menu option to search for.
     * @returns {MenuOption|null} The menu option with the specified label, or null if not found.
     * @throws {TypeError} Throws an error if the input is not a string.
     * @public
     */
    findOptionByName(name) {
        if (typeof name !== "string") {
            throw new TypeError("The name must be a string.");
        }
        return this.find(option => option.label === name) || null;
    }
}

export default OptionsArray;
