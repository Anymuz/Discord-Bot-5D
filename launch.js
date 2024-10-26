import spawn from 'child_process';
import readline from 'readline';
import register from '#config/botRegister' assert {"type": "json"};
import { heading } from 'discord.js';
import assignCommands from 'setup';

assignCommands()
// Create an interface to read input from the command line
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mainMenuDisplay = {
	heading: "---------[Bot Launch Controller]---------",
	text: `
		Use this to activate the bots, remember to use deploy if commands are new or changed. You can input -1 at any time to return to this menu.\n
		There will be additional features coming soon.
	`,
	options: [
		"Deploy Bot Commands",
		"Launch Bot",
		"Generate Bot",
		"Generate Command",
		"Command Packages"
	],
	display: {
		start: "",
		main: `| ${index}: ${option}`,
		end: "|"
	},
	responses: {
		correct: null,
		incorrect: `Please input the number that represents your selection`
	},
	execution: null
};
const botMenuDisplay = {
	heading: "------[Registered Bots]------",
	text: `The bots that are registered on this project are lsisted below.`,
	options: register.botRegister,
	display: {
		start: null,
		main: `${index}: ${bot}\n`,
		end: null
	},
	responses: {
		correct: `Selected: ${bot}`,
		inccorect: `You input the menu number of the bot you wish to launch.`
	},
	execution: {
		sucessful: `Sucessfully triggered ${bot} launch.`,
		failure: `Something went wrong, check the bots directory and try again.`
	}
};
const launchMenuDisplay = {
	heading: "------[Bot Launch]------",
	text: `You are about to launch ${bot}.`,
	options: [yes, no],
	display: {
		start: null,
		main: `${index}: ${bot}\n`,
		end: null
	},
	responses: {
		correct: `Launching: ${bot}`,
		inccorect: `Launch aborted.`
	},
	execution: {
		sucessful: `Sucessfully triggered ${bot} launch. Errors will be displayed in console.`,
		failure: `Something went wrong, check the bots directory and try again.`
	}
}
const deployMenuDisplay = {
	heading: "-----[Command Deployment]------",
	text: `You are about to deploy commands for ${bot}.`,
	options: ['yes', 'no'],
	display: null,
	responses: {
		correct: `Deploying commands for ${bot}.`,
		incorrect: `Deployment cancelled.`
	},
	execution: {
		sucessful: `Sucessfully triggered ${bot}.`,
		failure: `Something went wrong, check the bots configuration, verify command packs and servers then try again.`
	}
};
const launchFromDeployDisplay = {
	heading: null,
	text: `Do you wish to launch ${bot} now?`,
	options: ['yes', 'no'],
	display: null,
	responses: {
		correct: `Launching: ${bot}`,
		incorrect: `Returning to menu.`
	},
	execution: {
		sucessful: `Sucessfully triggered ${bot} launch. Errors will be displayed in console.`,
		failure: `Something went wrong, check the bots directory and try again.`
	}
};


//onst botOptions = register.botRegister;

const displayBots = (botOptions, index) => {
	var optionDisplay = botOptions.map((bot, index) => {optionDisplay[index] = `${index}: ${bot}`
	console.log("------[Registered Bots]------");
	optionDisplay.forEach((option)=> {console.log(option)});
})};

const askQuestion = (question, callback) => {
	userInterface.question(question, (answer) => {
		callback(answer)
	})
};

const mainMenu = () => {
	//var mainMenuDisplay = displays.inital;
	//const mainmenuMessage = "---------[Bot Launch Controller]---------"; 
	mainMenuOptions.forEach((option, index) => {mainMenu += `| ${index}: ${option} `}), mainMenu += "|"

    askQuestion(`Please select an option by inputting the corresponding number: `, {target}, (input) => {
        switch (input) {
            case '1': // Run script
                askQuestion('Enter the script name you want to run (default: bot.js): ', (scriptName) => {
                    const scriptToRun = scriptName || 'bot.js';
                    console.log(`Running script: ${scriptToRun}`);
                    // Call the script execution logic here, if needed
                    askToRunAnother();
                });
                break;
            case '2': // Debug script
                askQuestion('Enter the script name you want to debug (default: bot.js): ', (debugScript) => {
                    const scriptToDebug = debugScript || 'bot.js';
                    console.log(`Debugging script: ${scriptToDebug}`);
                    // Add debug logic here
                    askToRunAnother();
                });
                break;
            case '3': // Exit
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please select again.');
                mainMenu(); // Restart the menu if invalid input
        }
    });
}

const abortControl = new AbortController();
const target = abortControl.signal;

target.addEventListener('abortMenu', () => {
	console.log('You must input the number that corresponds to your choice.');
}, { once: true });




//const botOptions = registeredBots

// console.log(mainMessage);
// console.log(mainMenu);

// userInterface.question('Please select an option by inputting the corresponding number: ', {target}, (input) => {
// 	if (!mainMenu[parseInt(input)]){abortControl.abort()}
// 	else {
// 		const choice = parseInt(input);
// 		var nextQuestion;
// 		if (choice == 0 || choice == 1){
// 			nextQuestion = displayBots(botOptions, index)
// 		} else {
// 			nextQuestion = "This feature is coming soon."
// 		}
// 	};
// })
// /*
/*
const { spawn } = require('child_process');
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions one by one
function askQuestions(questions, callback) {
    let answers = [];
    let index = 0;

    const questionLoop = () => {
        if (index < questions.length) {
            rl.question(questions[index], (answer) => {
                answers.push(answer);
                index++;
                questionLoop(); // Recursive call to ask the next question
            });
        } else {
            callback(answers); // When done, call the callback with all the answers
        }
    };

    questionLoop(); // Start asking questions
}

// Questions we want to ask
const questions = [
    'Enter the script name you want to run (default: bot.js): ',
    'Do you want to run this in debug mode? (yes/no): '
];

// Call the function and handle the user's answers
askQuestions(questions, (answers) => {
    const scriptToRun = answers[0] || 'bot.js';
    const debugMode = answers[1].toLowerCase() === 'yes';

    const nodeArgs = debugMode ? ['--inspect', scriptToRun] : [scriptToRun];
    const nodeProcess = spawn('node', nodeArgs);

    // Handle output
    nodeProcess.stdout.on('data', (data) => {
        console.log(`Output: ${data}`);
    });

    nodeProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
    });

    nodeProcess.on('close', (code) => {
        console.log(`Process exited with code ${code}`);
        // Close the readline interface
        rl.close();
    });
});

*/

// Prompt the user for input
// userInterface.question('Enter the script name you want to run (default: bot.js): ', (input) => {
//     // If the user didn't specify input, use 'bot.js' as default
//     const scriptToRun = input || 'bot.js';

//     // Spawn the process using the provided script
//     const nodeProcess = spawn('node', [scriptToRun]);

//     // Handle the output from the spawned process
//     nodeProcess.stdout.on('data', (data) => {
//         console.log(`Output: ${data}`);
//     });

//     nodeProcess.stderr.on('data', (data) => {
//         console.error(`Error: ${data}`);
//     });

//     nodeProcess.on('close', (code) => {
//         console.log(`Process exited with code ${code}`);
//         // Close the readline interface
//         userInterface.close();
//     });
// });





// // main bot.js
// import { Client, Collection, Events } from 'discord.js';
// import { discordClient, spawnEnvironment, assignCommands } from './setup/setup';

// const ENV = spawnEnvironment(); // Spawn environment
// const CLIENT = discordClient(Client); // Setup client
// CLIENT.commands = assignCommands(CLIENT); // setup commands

// CLIENT.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isChatInputCommand()) return;
// 	const command = interaction.CLIENT.commands.get(interaction.commandName);

// 	if (!command) {
// 		console.error(`No command matching ${interaction.commandName} was found.`);
// 		return;
// 	}

// 	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		if (interaction.replied || interaction.deferred) {
// 			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
// 		} else {
// 			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
// 		}
// 	}
// });

// // prepare
// CLIENT.once(Events.ClientReady, readyClient => {
// 	//CLIENT.user.setAvatar('./content/avatar-1.png').then(() => console.log('Avatar updated!')).catch(console.error);
// 	console.log(`${readyClient.user.tag} is now online. Version: ${ENV.CONFIG.prod_version} Deployment: ${ENV.STAGE_MESSAGE}`);
// });
// CLIENT.login(ENV.DISCORD_TOKEN); // authenticate


// import { fileURLToPath } from 'node:url';
// import fs from 'node:fs';
// import path from 'node:path';
