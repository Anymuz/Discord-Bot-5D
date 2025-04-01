/**
 * Class representing a menu option.
 * @class MenuOption
 * @property {string} label - The label of the menu option.
 * @property {string} type - The type of the menu option ("execution" or "redirection").
 * @property {InterfaceResponse} response - Response messages for the option.
 * @property {Menu|null} targetMenu - Target menu for redirection options.
 * @property {Function|null} action - Action function for execution options.
 * @example
 * const option = new MenuOption("Option 1", "execution", response, null, () => console.log("Executing..."));
 */
class MenuOption {
    /**
     * Creates a new MenuOption instance.
     * @param {string} label - The label of the menu option.
     * @param {string} type - The type of the menu option ("execution" or "redirection").
     * @param {InterfaceResponse} response - Response messages for the option.
     * @param {Menu|null} [targetMenu=null] - Target menu for redirection options.
     * @param {Function|null} [action=null] - Action function for execution options.
     * @public
     */
    constructor(label, type, response, targetMenu = null, action = null) {
        this.label = label;
        this.type = type;
        this.response = response;
        this.targetMenu = targetMenu;
        this.action = action;
    }

    /**
     * Executes the menu option.
     * @returns {Promise<void>} Resolves when the action or redirection is complete.
     * @throws {Error} Throws an error if the configuration is invalid.
     * @example
     * const option = new MenuOption("Option 1", "execution", response, null, () => console.log("Executed"));
     * await option.execute();
     * @public
     */
    async execute() {
        if (this.type === 'execution' && this.action) {
            try {
                console.log(this.response.positive);
                await this.action();
            } catch (error) {
                console.error(this.response.negative);
            }
        } else if (this.type === 'redirection' && this.targetMenu) {
            console.log(this.response.positive);
            await this.targetMenu.start();
        } else {
            console.error("Invalid MenuOption configuration.");
        }
    }
}

export default MenuOption;
