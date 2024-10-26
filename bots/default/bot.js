// #bots/default
import { Client, Events } from 'discord.js';
import { discordClient, spawnEnvironment, assignCommands } from '#setup/setup/setup';
import {loadCommands, commandProcessor, parseConfig} from '#handlers';
import config from '#config/bot' assert {'type':'json'};

const commandConfiguration = parseConfig(config);
const serverCommands = commandProcessor(loadCommands(commandConfiguration.serverPacks));
const botCommands = commandProcessor(loadCommands(commandConfiguration.botPacks));
const allCommands = {...serverCommands, ...botCommands};
const ENV = spawnEnvironment(config); // Spawn environment
const CLIENT = discordClient(Client); // Setup client
CLIENT.commands = assignCommands(CLIENT, allCommands); // setup commands

CLIENT.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.CLIENT.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

// prepare
CLIENT.once(Events.ClientReady, readyClient => {
	//CLIENT.user.setAvatar('./content/avatar-1.png').then(() => console.log('Avatar loaded!')).catch(console.error);
	console.log(`${readyClient.user.tag} is now online. Version: ${ENV.CONFIG.prod_version} Deployment: ${ENV.STAGE_MESSAGE}`);
});
CLIENT.login(ENV.DISCORD_TOKEN); // authenticate


// import { fileURLToPath } from 'node:url';
// import fs from 'node:fs';
// import path from 'node:path';
