/**
 * Handles the display of menu options.
 * @class OptionsDisplay
 * @example
 * const display = new OptionsDisplay("|", ":", true);
 * display.displayOptions(optionsArray);
 */
class OptionsDisplay {
    /**
     * Constructs an OptionsDisplay instance.
     * @param {string} [separator="|"] - The separator between options in inline mode.
     * @param {string} [splitter=":"] - The character splitting the option number and label.
     * @param {boolean} [newLine=true] - Whether options are displayed on new lines.
     * @public
     */
    constructor(separator = "|", splitter = ":", newLine = true) {
        this.separator = separator;
        this.splitter = splitter;
        this.newLine = newLine;
    }

    /**
     * Displays the menu options.
     * @param {MenuOption[]} options - Array of menu options to display.
     * @public
     * @example
     * const options = new OptionsArray();
     * options.push(new MenuOption("Option 1", "execution", response));
     * display.displayOptions(options);
     */
    displayOptions(options) {
        options.forEach((option, index) => {
            const formattedOption = `${index + 1}${this.splitter} ${option.label}`;
            process.stdout.write(formattedOption);
            if (this.newLine) {
                console.log();
            } else {
                process.stdout.write(` ${this.separator} `);
            }
        });
        if (!this.newLine) {
            console.log();
        }
    }
}

export default OptionsDisplay;
