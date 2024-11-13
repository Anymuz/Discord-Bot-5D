// Import every file as modules:
//----------------------------- //
import Display from 'Anymuz-Interface/Display';
import InterfaceResponse from 'Anymuz-Interface/InterfaceResponse';
import Menu from 'Anymuz-Interface/Menu';
import MenuOption from "Anymuz-Interface/MenuOption";
import OptionsArray from "Anymuz-Interface/OptionsArray";
import OptionsDisplay from "Anymuz-Interface/OptionsDisplay";
import StringOperation from "Anymuz-Interface/StringOperation";
import TypeValidation from "Anymuz-Interface/TypeValidation";
//----------------------------- //
// Deconstructor to extract response classes: 
// ------------------------------------------ //
const { ExecutionResponse, MenuResponse, RedirectResponse } = InterfaceResponse;
// ------------------------------------------ //
// Named export for each module: 
// ----------------------------- //
/** Named export of module components. */
export {
    Display,
    ExecutionResponse,
    MenuResponse,
    Menu,
    MenuOption,
    OptionsArray,
    OptionsDisplay,
    RedirectResponse,
    StringOperation,
    TypeValidation
};
// ----------------------------- //
// Default export for all modules as one object:
// ---------------------------------------------
/** Default export of module components. */
export default {
    Display,
    ExecutionResponse,
    MenuResponse,
    Menu,
    MenuOption,
    OptionsArray,
    OptionsDisplay,
    RedirectResponse,
    StringOperation,
    TypeValidation
};
// ---------------------------------------------