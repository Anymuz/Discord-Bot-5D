// Briefing
/*  Situation: The launcher needs a user interface for it's many features, this file is to hold the objects
    Mission: Make an interterface set of objects that provide what we need
    Execution: What we need from the interface is:
        - Main menu that lists the available features: <- long line, numbered
            - Bots (management if possible) <- long line
                - Create new Bot
                - For each bot: <- 1 line, typed?
                    - Launch Bot <- Launch bot
                    - Deploy Commands <- Run deploy script
                    - Update Avatar <- Launch with new avatar
            - Commands <- long line/single line (can we mix?)
                - Create Command <- Template script
                - {each command} <- Opens/reads a description/output object data?
            - Packages <- Single line
                - Server Packs <- Multi line
                    - New Server
                    - {each server} <- Opens/reads a description????? object data?
                - Client Packs <- multi line
                    - New Server
                    - {each server} <- Opens/reads a description????? object data?

*/

// Interface objects and configurations are constructed and sorted: 
// ---------------------------------------------------------------- //
// Import Classes:
// --------------- //
import ReadLine from 'readline'; // remove
import LauncherInterface, { MenuOption, OptionsArray } from 'anymuz-interaction';
import { stdin } from 'process';
// --------------- //
const VERSION='1.0'

// Options Displays
export const OptionDisplays = {
    Standard: new LauncherInterface.OptionsDisplay()
};

// MenuDisplays
export const Displays =  {
    BotMenu: new LauncherInterface.Display('BOT MANAGEMENT','Discord Bots:',OptionDisplays.Standard),
    MainMenu: new LauncherInterface.Display('MAIN MENU',`Bot Launch Control Version ${VERSION}\nAvailable Options:`,OptionDisplays.Standard),
};

// Menus
export const  Menus = {
    Main: new LauncherInterface.Menu(Displays.MainMenu, new LauncherInterface.OptionsArray(), new ReadLine.createInterface(stdin))
};

// Responses
export const Responses = {
    Execute: new LauncherInterface.ExecutionResponse('Option executed successfully!', 'Execution failed.'),
    Redirect: new LauncherInterface.RedirectResponse(),
    MenuError: new LauncherInterface.MenuResponse('Invalid choice. Please try again.')
};

// Options
export const MainOptions = { Bots: new LauncherInterface.MenuOption('Bots', 'redirection', Responses.Redirect, Menus.Main),
    Commands: new LauncherInterface.MenuOption('Commands', 'redirection', Responses.Redirect, Menus.Main),
    Packages: new LauncherInterface.MenuOption('Packages', 'redirection', Responses.Redirect, Menus.Main)
};

export const Options = {
    MainMenu: new LauncherInterface.OptionsArray(...Object.entries(MainOptions).map(option=>{return option[1]}))
};

Menus.Main.setAllOptions(Options.MainMenu)

// MainOptions.Bots.response.setPositive(`Selected: ${Menus.Main.Display.getHeading}`)
// Options.MainMenu.map((object) => {object = Object.entries(MainOptions)}) 
// console.log(Object.entries(MainOptions)[1])

//options = Object.entries(MainOptions).map(option=>{return option[1]});
//let options = new LauncherInterface.OptionsArray(...Object.entries(MainOptions).map(option=>{return option[1]}))
//console.log(options)

// let commandEntries = Object.entries(commandPack).map(commandEntry => {return{name: commandEntry[1].data.name, command: commandEntry[1]}}) ; 
//     commandEntries = commandEntries.map(commandEntry => {if ('data' in commandEntry.command && 'execute' in commandEntry.command) {
//         console.log(`Command processed: ${commandEntry.name}.`);
//         return { data: commandEntry.command.data, execute: commandEntry.command.execute, jsonData: commandEntry.command.data.toJSON()} 
//     } else {console.log(`[WARNING] The command '${commandEntry.name}' requires correct 'data' and 'execute' properties.`)}});
//console.log(Options.MainMenu)
//= Object.entries(MainOptions).map((option)=>option[1])
//Options.MainMenu.push(Object.)
//Options.MainMenu.map((option, index)=>{option = Object.entries(MainOptions)[index]})
//Menus.Main.Options[0].RedirectResponse.setPositive


//forEach(option => {return option})
//

//const RedirectResponse = new LauncherInterface.RedirectResponse('Redirecting to submenu...');


// Options




//    const MainMenu_Bots = new LauncherInterface.MenuOption('Bots', 'redirection', Responses.Redirect, Menus.Main)

// OptionArrays
//export const OptionArrays = {
    // const MainOptions = [
    //     // new LauncherInterface.MenuOption('Bots', 'redirection', Responses.Redirect, Menus.Bot),
    //     // new LauncherInterface.MenuOption('Commands', 'redirection', Responses.Commands, Menus.Command),
    //     // new LauncherInterface.MenuOption('Packages', 'redirection', Responses.Packages, Menus.Package)
    //     new LauncherInterface.MenuOption('Bots', 'redirection', Responses.Redirect, Menus.Main),
    //     new LauncherInterface.MenuOption('Commands', 'redirection', Responses.Commands, Menus.Main),
    //     new LauncherInterface.MenuOption('Packages', 'redirection', Responses.Packages, Menus.Main)
    // ]
//};








export default {
    Displays,
    Menus,
    Options,
    //OptionArrays,
    OptionDisplays,
    Responses,
    MainOptions
};

//const { ExecutionResponse, MenuResponse, RedirectResponse } = Interface;

// export {
//     Display,
//     ExecutionResponse,
//     MenuResponse,
//     Menu,
//     MenuOption,
//     OptionsArray,
//     OptionsDisplay,
//     RedirectResponse,
//     StringOperation,
//     TypeValidatior
// };

// export default {
//     Display,
//     ExecutionResponse,
//     MenuResponse,
//     Menu,
//     MenuOption,
//     OptionsArray,
//     OptionsDisplay,
//     RedirectResponse,
//     StringOperation,
//     TypeValidatior
// };

// // Define options for the menus first (empty initially)
// const subMenuOptions = new AnymuzInterface.OptionsArray();
// const mainMenuOptions = new AnymuzInterface.OptionsArray();

// // Create main and submenus
// const mainMenu = new AnymuzInterface.Menu(mainMenuDisplay,mainMenuOptions,userReadLine);
// const subMenu = new AnymuzInterface.Menu(subMenuDisplay,subMenuOptions,userReadLine,true);

// // Define options for the submenu
// subMenuOptions.push(new AnymuzInterface.MenuOption(
//     'Back to Main Menu',
//     'redirection', 
//     redirectionResponse, 
//     mainMenu,
//     null
// ));

// // Import required modules and classes
// import ReadLine from 'readline';
// import AnymuzInterface from 'anymuz-interaction';

// // Mock readline interface for user input
// const userReadLine = ReadLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // OptionsDisplay configuration
// const optionsDisplay = new AnymuzInterface.OptionsDisplay("|",":",``,true);

// // Create display instances
// const mainMenuDisplay = new AnymuzInterface.Display('Main Menu', optionsDisplay);
// const subMenuDisplay = new AnymuzInterface.Display('Submenu', optionsDisplay);

// // Define response instances
// const successResponse = new AnymuzInterface.ExecutionResponse('Option executed successfully!', 'Execution failed.');
// const redirectionResponse = new AnymuzInterface.ReplyResponse('Redirecting to submenu...');
// const menuErrorResponse = new AnymuzInterface.MenuResponse('Invalid choice. Please try again.');

// // Define options for the menus first (empty initially)
// const subMenuOptions = new AnymuzInterface.OptionsArray();
// const mainMenuOptions = new AnymuzInterface.OptionsArray();

// // Create main and submenus
// const mainMenu = new AnymuzInterface.Menu(mainMenuDisplay,mainMenuOptions,userReadLine);
// const subMenu = new AnymuzInterface.Menu(subMenuDisplay,subMenuOptions,userReadLine,true);

// // Define options for the submenu
// subMenuOptions.push(new AnymuzInterface.MenuOption(
//     'Back to Main Menu',
//     'redirection', 
//     redirectionResponse, 
//     mainMenu,
//     null
// ));
// subMenuOptions.push(new AnymuzInterface.MenuOption('Print Date','execution', successResponse,mainMenu,()=>console.log(new Date().toLocaleDateString())));

// // Define options for the main menu
// mainMenuOptions.push(new AnymuzInterface.MenuOption('Say Hello','execution', successResponse,mainMenu,()=>console.log('Hello!')));
// mainMenuOptions.push(new AnymuzInterface.MenuOption('Go to Submenu','redirection',redirectionResponse,subMenu,null));

// // Link options to their respective menus
// mainMenuOptions[1].targetMenu = subMenu; // "Go to Submenu" redirects to submenu
// subMenuOptions[0].targetMenu = mainMenu; // "Back to Main Menu" redirects to mainMenu

// // Close readline after tests
// // let answer = await mainMenu.display();
// // mainMenu.processUserInput(answer);
