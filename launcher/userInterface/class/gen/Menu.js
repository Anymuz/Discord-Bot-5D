import InterfaceResponse from 'anymuz-interface/InterfaceResponse';
import Display from 'anymuz-interface/Display';
import MenuOption from 'anymuz-interface/MenuOption';
import OptionsArray from 'anymuz-interface/OptionsArray';
import ReadLine from 'readline';

/**
 * Class representing a menu for user interaction.
 * @class Menu
 * @property {Display} display - The display handler for the menu.
 * @property {OptionsArray} options - Array of menu options.
 * @property {ReadLine.Interface} userInterface - Input/output interface.
 * @property {boolean} nameInput - Whether options are selected by name.
 * @example
 * const menu = new Menu(display, options, userInterface, false);
 * await menu.start();
 */
class Menu {
    /**
     * Creates a new Menu instance.
     * @param {Display} display - The display handler for the menu.
     * @param {OptionsArray} options - Array of menu options.
     * @param {ReadLine.Interface} userInterface - Input/output interface.
     * @param {boolean} [nameInput=false] - Whether options are selected by name.
     * @public
     */
    constructor(display, options, userInterface, nameInput = false) {
        this.display = display;
        this.options = options || new OptionsArray();
        this.userInterface = userInterface || ReadLine.createInterface({ input: process.stdin, output: process.stdout });
        this.nameInput = nameInput;
        this.abortController = new AbortController();
    }

    /**
     * Adds an option to the menu.
     * @param {MenuOption} option - The menu option to add.
     * @public
     */
    addOption(option) {
        this.options.push(option);
    }

    /**
     * Removes an option from the menu.
     * @param {string|number} indexOrName - The index or name of the option to remove.
     * @public
     */
    removeOption(indexOrName) {
        if (typeof indexOrName === "string") {
            const option = this.options.findOptionByName(indexOrName);
            if (option) {
                this.options.splice(this.options.indexOf(option), 1);
            } else {
                console.error("Option with the specified name not found.");
            }
        } else if (indexOrName >= 0 && indexOrName < this.options.length) {
            this.options.splice(indexOrName, 1);
        } else {
            console.error("Invalid option index or name.");
        }
    }

    /** Displays the menu. @public */
    display() {
        this.display.present(this.options);
    }

    /**
     * Processes user input.
     * @param {string} input - The user input to process.
     * @returns {Promise<void>} Resolves when input is processed.
     * @example
     * menu.processUserInput("Option 1");
     * @public
     */
    async processUserInput(input) {
        if (['-1', 'close', 'exit'].includes(input.toLowerCase())) {
            console.log("Exiting menu...");
            this.userInterface.close();
            return;
        }

        const selectedOption = this.nameInput
            ? this.options.findOptionByName(input)
            : this.options[parseInt(input) - 1];

        if (selectedOption) {
            await selectedOption.execute();
        } else {
            console.error("Invalid selection. Please try again.");
        }
    }

    /** Starts the menu loop. @public */
    async start() {
        this.display();
        for await (const line of this.userInterface) {
            await this.processUserInput(line.trim());
            this.display();
        }
    }
}

export default Menu;
