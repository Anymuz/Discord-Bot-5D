// Import every file as modules:
//----------------------------- //
import Display from 'anymuz-interface/Display';
import InterfaceResponse from 'anymuz-interface/InterfaceResponse';
import Menu from 'anymuz-interface/Menu';
import MenuOption from "anymuz-interface/MenuOption";
import OptionsArray from "anymuz-interface/OptionsArray";
import OptionsDisplay from "anymuz-interface/OptionsDisplay";
import StringOperation from "anymuz-interface/StringOperation";
import TypeValidation from "anymuz-interface/TypeValidation";
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