/**
 * Handles the visual representation of the menu.
 * @class Display
 * @property {string} heading - The heading text of the menu.
 * @property {string} text - Additional text or subheading.
 * @property {OptionsDisplay} optionsDisplay - Object managing options rendering.
 * @property {string} encasing - Characters to encase the heading.
 * @property {string} fillChar - Character used for padding.
 * @property {number} lineLength - Length of the heading line.
 * @property {string} prompt - Prompt text for user input.
 * @example
 * const display = new Display("Main Menu", "Choose an option:", optionsDisplay);
 * display.present(optionsArray);
 */
class Display {
    /**
     * Constructs a Display instance.
     * @param {string} heading - The heading text of the menu.
     * @param {string} text - Additional text or subheading.
     * @param {OptionsDisplay} optionsDisplay - Object managing options rendering.
     * @param {string} [encasing="[]"] - Characters to encase the heading.
     * @param {string} [fillChar="-"] - Character used for padding.
     * @param {number} [lineLength=64] - Length of the heading line.
     * @param {string} [prompt="Input option:"] - Prompt text for user input.
     * @public
     */
    constructor(heading, text, optionsDisplay, encasing = '[]', fillChar = '-', lineLength = 64, prompt = "Input option:") {
        this.heading = heading;
        this.text = text;
        this.optionsDisplay = optionsDisplay;
        this.encasing = encasing;
        this.fillChar = fillChar;
        this.lineLength = lineLength;
        this.prompt = prompt;
    }

    /**
     * Sets the user input prompt.
     * @param {string} prompt - The new prompt text.
     * @public
     */
    setPrompt(prompt) {
        this.prompt = prompt;
    }

    /** Displays the user input prompt. @public */
    displayPrompt() {
        console.log(this.prompt);
    }

    /** Displays the heading. @public */
    displayHeading() {
        const padding = this.fillChar.repeat((this.lineLength - this.heading.length) / 2);
        console.log(`${this.encasing[0]}${padding}${this.heading}${padding}${this.encasing[1]}`);
    }

    /** Displays additional text or subheading. @public */
    displayText() {
        console.log(this.text);
    }

    /**
     * Presents the menu with options.
     * @param {MenuOption[]} options - Array of menu options to display.
     * @public
     */
    present(options) {
        this.displayHeading();
        this.displayText();
        this.optionsDisplay.displayOptions(options);
        this.displayPrompt();
    }
}

export default Display;
