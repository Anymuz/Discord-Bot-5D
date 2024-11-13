// Import required modules and classes
import ReadLine from 'readline';
import AnymuzInterface from 'anymuz-interface';
//console.log(AnymuzInterface.TypeValidatior.typeCheck('string', String))
// Mock readline interface for user input
const userReadLine = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
new AnymuzInterface.OptionsDisplay()
// OptionsDisplay configuration
const optionsDisplay = new AnymuzInterface.OptionsDisplay("|",":",true);

// Create display instances
const mainMenuDisplay = new AnymuzInterface.Display('Main Menu', 'subtext', optionsDisplay);
const subMenuDisplay = new AnymuzInterface.Display('Submenu', 'subtext',optionsDisplay);

// Define response instances
const successResponse = new AnymuzInterface.ExecutionResponse('Option executed successfully!', 'Execution failed.');
const redirectionResponse = new AnymuzInterface.RedirectResponse('Redirecting to submenu...');
const menuErrorResponse = new AnymuzInterface.MenuResponse('Invalid choice. Please try again.');

// Define options for the menus first (empty initially)
const subMenuOptions = new AnymuzInterface.OptionsArray();
const mainMenuOptions = new AnymuzInterface.OptionsArray();

// Create main and submenus
const mainMenu = new AnymuzInterface.Menu(mainMenuDisplay,mainMenuOptions,userReadLine);
const subMenu = new AnymuzInterface.Menu(subMenuDisplay,subMenuOptions,userReadLine,true);

// Define options for the submenu
subMenuOptions.push(new AnymuzInterface.MenuOption(
    'Back to Main Menu',
    'redirection', 
    redirectionResponse, 
    mainMenu,
    null
));
subMenuOptions.push(new AnymuzInterface.MenuOption('Print Date','execution', successResponse,mainMenu,()=>console.log(new Date().toLocaleDateString())));

// Define options for the main menu
mainMenuOptions.push(new AnymuzInterface.MenuOption('Say Hello','execution', successResponse,mainMenu,()=>console.log('Hello!')));
mainMenuOptions.push(new AnymuzInterface.MenuOption('Go to Submenu','redirection',redirectionResponse,subMenu,null));

// Link options to their respective menus
mainMenuOptions[1].targetMenu = subMenu; // "Go to Submenu" redirects to submenu
subMenuOptions[0].targetMenu = mainMenu; // "Back to Main Menu" redirects to mainMenu

// // Function to simulate user interaction for testing purposes
// function simulateUserInput(menu, input) {
//     console.log(`\n--- Testing menu: ${menu.Display.getHeading()} ---`);
//     //menu.Display(); // Display the menu

//     // Mock user input
//     //userReadLine.question = (prompt, callback) => {
//     //    console.log(prompt + input); // Simulate user input display
//     //    callback(input); // Invoke callback with simulated input
//     //};

//     // Process the input within the menu
//     menu.processUserInput();
// }

// // Test the main menu with valid and invalid inputs
// simulateUserInput(mainMenu, '0'); // Should execute "Say Hello"
// simulateUserInput(mainMenu, '1'); // Should redirect to "Submenu"
// simulateUserInput(mainMenu, '3'); // Should print error for invalid choice

// // Test the submenu
// simulateUserInput(subMenu, '0'); // Should redirect back to main menu
// simulateUserInput(subMenu, '1'); // Should execute "Print Date"
// simulateUserInput(subMenu, '5'); // Should print error for invalid choice

// Close readline after tests
// let answer = await mainMenu.display();
// mainMenu.processUserInput(answer);

// mainMenu.processUserInput('0');
// mainMenu.processUserInput('1');
// mainMenu.processUserInput('3');
// subMenu.processUserInput('0');
// subMenu.processUserInput('1');
// subMenu.processUserInput('5');

// console.log(subMenuDisplay.getEncasing());
// console.log(subMenuDisplay.present(subMenu));
// userReadLine.close();
// let input = await mainMenu.display();
// mainMenu.processUserInput(input)
await mainMenu.start();
//userReadLine.close();

























//import stringHandler from "./launcher/userInterface/internal/string-operations.js";

// function padString(length, paddingChar, word, encloser) {
//     // Input validation
//     if (typeof length !== 'number' || !Number.isInteger(length) || length <= 0) {
//         throw new Error("The length must be a positive integer.");
//     }
//     if (typeof paddingChar !== 'string' || paddingChar.length !== 1) {
//         throw new Error("The padding character must be a single character.");
//     }
//     if (typeof word !== 'string') {
//         throw new Error("The word must be a string.");
//     }
//     if (typeof encloser !== 'string' || encloser.length !== 2) {
//         throw new Error("The encloser must be a two-character string.");
//     }

//     // Calculate inner content with encloser
//     const innerContent = `${encloser[0]}${word}${encloser[1]}`;
//     const paddingLength = length - innerContent.length;
//     if (paddingLength < 0) {
//         throw new Error("The specified length is too short to contain the word and encloser.");
//     }

//     // Calculate padding on each side
//     const leftPaddingLength = Math.floor(paddingLength / 2);
//     const rightPaddingLength = paddingLength - leftPaddingLength;

//     // Create the padded string
//     const leftPadding = paddingChar.repeat(leftPaddingLength);
//     const rightPadding = paddingChar.repeat(rightPaddingLength);

//     // Return the final padded string
//     return `${leftPadding}${innerContent}${rightPadding}`;
// }

// // Example usage:
// console.log(padString(64, '-', "Shtokavin", '[]'));


// Example usage:
//console.log(padString(64, '+', "Anymuz", '{}'));
// console.log('++++++++++++++++++++++++++++{Anymuz}++++++++++++++++++++++++++++'.length)
// console.log(stringHandler.padString(64, '+', "Anymuz", '{}'));
// console.log('+++++++++++++++++++++++++++++{Anymuz}+++++++++++++++++++++++++++++'.length)

// console.log(`20 per g means 1 ounce is: ${20*28}`);
// console.log(`That means 1KG which is ${1000/28} ounces`);
// console.log(`so 1KH would be ${(1000/28)*28*20}`)
// console.log(35.714*560)
// console.log(stringHandler.padString(64, '-', "Shtokavin", '[]'));
// let string_even =  'Anymuz', string_odd = 'Shtokavin';
// console.log(`Even String: ${string_even}  |  Odd String: ${string_odd}`);
// console.log(`Expectation for Even String | Back: 'Muz' | Front: 'Any' | Mid:Null |`);
// console.log(`Expectation for Odd String | Back: 'avin' | Front: 'Shto'| Mid:'k' |`);
// console.log(stringHandler.charEvenString(64, '-'));
// const even_halved = stringHandler.halfString(string_even);
// console.log(`Results for Even String | Back: ${even_halved.back}' | Front: ${even_halved.front}' | Mid: ${even_halved.mid}`);
// const odd_halved = stringHandler.halfString(string_odd);
// console.log(`Results for Odd String | Back: ${odd_halved.back}' | Front: ${odd_halved.front}' | Mid: ${odd_halved.mid}`);
// console.log(24*7);
// console.log((24*7)/3)
// let test_character = '+';
// let test_length = 65;
// console.log(`Character: ${test_character}\nLength: ${test_length}`);
// console.log(`Expectation: To see a ${test_length-1} long string of '${test_character}' and a returned length of ${test_length-1}`);
// console.log(`Testing...`)S
// console.log(stringHandler.charEvenString(test_length, test_character));
// console.log(stringHandler.charEvenString(test_length, test_character).length);
// import typeValidator from "./launcher/userInterface/internal/type-validation.js";

// let string_4chars="four";
// let string_1chars="-";
// console.log(`Testing stream of checkLengths in pattern: 4, 1, 7`)
// console.log(`4 character string: ${string_4chars}\nPattern:\ntrue, false, false`)// 4,1,7
// console.log(`1 character string: ${string_1chars}\nPattern:\nfalse, true, false`)
// console.log(`${string_4chars}:`);
// console.log(checkLength(string_4chars, 4))
// console.log(checkLength(string_4chars, 1))
// console.log(checkLength(string_4chars, 7))
// console.log(`${string_1chars}:`);
// console.log(checkLength(string_1chars, 4))
// console.log(checkLength(string_1chars, 1))
// console.log(checkLength(string_1chars, 7))
// console.log('Expected: true, false, false, false, true, false')








// let int_value = 6
// let not_int = 3.142
// console.log(`Integer vale: ${int_value}\nNon-Integer value${not_int}`);
// console.log('Expected:\nInteger value to console.log\nError after');
// console.log(typeof(6));
// console.log(typeof(Number()))

// let output_int_test = typeValidation.typeCheck(int_value, Number);
// console.log(output_int_test)
// let output_not_test = typeValidation.typeCheck(not_int, Number);
// console.log(output_not_test)

// let output_int = typeValidation.numberCheck(int_value, typeValidation.type_integer);
// console.log(output_int)
// let output_not = typeValidation.numberCheck(not_int, 'float');
// console.log(output_not)










// let odd_string = "Shtokavin", even_string="Anymuz"
// console.log(`Odd String: ${odd_string}\nEven String: ${even_string}`);
// console.log(`Is odd string odd? -> ${oddLength(odd_string)}`);
// console.log(`Is even string even? -> ${oddLength(even_string)}`);
// console.log(`Expected:\ntrue\nfalse`);



// import {Display} from 'anymuz-interaction/Display';

// const even_heading = "Anymuz";
// const odd_heading = "Shtokavin";
// const text = "TEST";
// console.log(String)
// console.log(typeof(""))

// console.log(`Even Heading: ${even_heading}\nExpectations:\nThe even parts of the method work, split into [front] [back], base header behaves acordinly.`);
// console.log(`Odd Heading: ${odd_heading}\nExpectations:\nThe odd parts of the method work, is split into any [front][mid char][back], base header behaves acordinly.`);

// const testDisplay = new Display("Anymuz", text);
// var display_heading = testDisplay.formatHeading();

// console.log(testDisplay)
// console.log(display_heading)

// const current_heading = testDisplay.getHeading();
// console.log(current_heading);
// testDisplay.setHeading(odd_heading);
// console.log(testDisplay.formatHeading())


// import {collectPacks} from "handlers"
// import botConfig from "#config/bot/default" assert {"type": "json"}

// const commandPacks =  botConfig.commandPacks
// const commands = await collectPacks(commandPacks)
// console.log(commands)



// import commands from '#commands';

// const commandPack = commands;

// let discordCommands = [];
// let jsonCommandsData = [];
// let newCommands = [];

// const process = (commandPack) => {
//     console.log("Preparing Commands...");
//     let commandEntries = Object.entries(commandPack).map(commandEntry => {return{name: commandEntry[1].data.name, command: commandEntry[1]}}) ; 
//     commandEntries.forEach((commandEntry) => {if ('data' in commandEntry.command && 'execute' in commandEntry.command) {
//         let mixedCommand = { data: commandEntry.command.data, execute: commandEntry.command.execute}
//         let jsonCommandData = commandEntry.command.data.toJSON()
//         let discordCommand = { data: commandEntry.command.data, execute: commandEntry.command.execute}
//         mixedCommand['jsondata'] = jsonCommandData;
        
//         discordCommands.push(discordCommand)
//         jsonCommandsData.push(jsonCommandData);
//         newCommands.push(mixedCommand);
        

//         console.log(`Command processed: ${commandEntry.name}.`);
//     } else {console.log(`[WARNING] The command '${commandEntry.name}' requires correct 'data' and 'execute' properties.`)}});
//     console.log("All commands loaded into Client.");
//     //return client.commands;
// };

// process(commandPack)

// newCommands.forEach(
//     (c) => {
//         console.log(c.jsondata)
//     }
// )

// console.log(discordCommands)
// console.log(jsonCommandsData)
// console.log(newCommands)

