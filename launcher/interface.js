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

    Milestone (before updating interface branch):
        - Main Menu with the 3 options
        - Dummy menu for create new followed by list
            - consider a means of taking a variable that allows for 1 object dynamic enough to "New {type}" and list.
            - Likely will need a way to load item list into the menu
        - Have the packages menu for Server Packs and Client Packs
        - If must be, then make individual objects for the New + list menus
        - Have a menu for Launch bot, Deploy cmd and updt avtr
        

    Interface file here will also need functions:
        - Function to retrieve the list of bots available
        - Alternatively here we create a generic launch, deploy and update command which feeds
            a placeholder name into the three choices
            - With each of these choices activating a function? No, perhaps in launcher for this stuff, using the add option method

    Plan: Have launcher contain a dir with .js files for the functions/1 per function or multi functions per 1:
        - E.g create.js for the new/create options
        - e.g loadContent.js for the functions to load every bot avaialble called from this interface.js then return an options array (including new)
        - 
        - Future: Menus for each server/client pack to: Add command, remove command, delete  pack
        - Each command has meny to change description and /value or delete or to assign  or spawn template a different command function?
            - Each command will just be linked to a function to carry out that command, command create should have 
                menu to choose existing command functions available or to generate a blank one with this command before going to
                type name or type description options
                - Name and description options should just launch a function that takes user input then parses it into a function
                - THIS COULD WARRENT THE CREATION OF A NEW  MENU-A class inherited WHICH HAS current value or N?A if not got one JUST BACK INPUT DONE, or CLEAR (to show if Manu=A) As unchangeable options (creates it's own options using private method on display command)
                    - THIS TYPE OF MENY SHOULD THEN IF INPUT SELCETED LAUNCH new menu_B class inherited that has no options but it's processuserinput will instead update the previous new menu
                        with a new method to set attribute ====> This may acttually warrent a new type of menu option that doenst redirect, not execute, but instead can only be used with Menu-B
                        type objects and are not triggered by a nnumber or their name, but by the input being anything except 0 for back (displayed clearly for the user)
                        And then if its not 0 (processuserinput will be overwrittden) then the menuoption executes a method for that menu-b to set an attribute of it and then redirect to previoys meny
                    - Then if Done is selected this should call a method that uses the menu-b stored within menu-a (new attribute) and then with a getAttribut() the method also getJson() and getJsonKey() and then updates
                        the JSON key witht he attribute and redurects to a menu which options like set name, set attributes, set function 
                    - The set [something]  options are mew innherited redirect options 
                    THIS IS TO BE DESIGNED IN MORE DETAIL
        
UML Rules:
Association:    Class A MAY use class B as part of it's functionality (or bidirectional)  ~
                class B MAY have functions beside for being used by class A
                A objects and B objects are instantiated SEPERATE
                B objects function on SEPERATE A objects

Aggregation:    Class A WILL use class B as part of it's functionality.
                Class B MAY have other functions bseide for being used by class B
                A objects and B objects are istantiated SEPERATE
                B objects function WITHIN same A object

Dependency:     Class A MAY use class B as part of its functioning
                Class B WILL function so that class A will function
                A objects instatiate B objects WITHIN themselves
                B objects function on SEPERATE A objects

Composition:    Class A WILL use class B as part of it's functionality
                class B WILL function only for class B
                A objects instantiate B objects WITHIN themselves
                B objects exist WITHIN same a object
*/

// Interface objects and configurations are constructed and sorted: 
// ---------------------------------------------------------------- //
// Import Classes:
// --------------- //
import ReadLine from 'readline'; // remove
import LauncherInterface from 'anymuz-interface';
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
    commandMenu: new LauncherInterface.Display('COMMAND MENU','Command Managemment',OptionDisplays.Standard), 
    MainMenu: new LauncherInterface.Display('MAIN MENU',`Bot Launch Control Version ${VERSION}\nAt any time input -1 to go exit.\nAvailable Options:`,OptionDisplays.Standard)
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
export const BotsList = {
    Back: new LauncherInterface.MenuOption('Back', 'redirection', Responses.Redirect, Menus.Main),
    Bot: new LauncherInterface.MenuOption('[name]', 'redirection', Responses.Redirect, Menus.BotOptions)
    // Consider swapping and having new, launch, depoy, update avtr which then goes to the bot list??? Impass: Need to pass data across
}

export const BotOptions = {
    Back: new LauncherInterface.MenuOption('Back', 'redirection', Responses.Redirect, Menus.Main),
    Deploy: new LauncherInterface.MenuOption('Deploy Commands', 'execution', Responses.Execute, Menus.BotsList, ()=>console.log("Deploy.js")),
    Launch: new LauncherInterface.MenuOption('Launch Bot', 'execution', Responses.Execute, Menus.BotsList, ()=>console.log("Launch.js")),
    UpdatePic: new LauncherInterface.MenuOption('Update Avatar', 'execution', Responses.Execute, Menus.BotsList, ()=>console.log("Avatar.js"))
};

export const MainOptions = { Bots: new LauncherInterface.MenuOption('Bots', 'redirection', Responses.Redirect, Menus.Main),
    Commands: new LauncherInterface.MenuOption('Commands', 'redirection', Responses.Redirect, Menus.Main),
    Packages: new LauncherInterface.MenuOption('Packages', 'redirection', Responses.Redirect, Menus.Main)
};

// Loading  Options
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
