import InterfaceResponse from 'anymuz-interface/InterfaceResponse';
import Display from 'anymuz-interface/Display';
import MenuOption from 'anymuz-interface/MenuOption';
import OptionsArray from 'anymuz-interface/OptionsArray';
import ReadLine from 'readline';

class Menu {
    constructor(display, options, userInterface, nameInput = false) {
        this.display = display;
        this.options = options || new OptionsArray();
        this.userInterface = userInterface || ReadLine.createInterface({ input: process.stdin, output: process.stdout });
        this.nameInput = nameInput;
        this.abortController = new AbortController();
    }

    addOption(option) {
        this.options.push(option);
    }

    removeOption(index) {
        if (index >= 0 && index < this.options.length) {
            this.options.splice(index, 1);
        } else {
            console.error("Invalid option index");
        }
    }

    display() {
        this.display.present(this.options);
    }

    async processUserInput(input) {
        const selectedOption = this.nameInput
            ? this.options.find(option => option.label === input)
            : this.options[parseInt(input) - 1];

        if (selectedOption) {
            await selectedOption.execute();
        } else {
            console.error("Invalid selection. Please try again.");
        }
    }

    async start() {
        this.display();
        for await (const line of this.userInterface) {
            await this.processUserInput(line.trim());
            this.display();
        }
    }
}
export default Menu;
