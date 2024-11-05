// #setup/command
import { Collection } from 'discord.js';
import commandProcessor from '#handlers/commandProcessor'
export default (client, commandEntries) => {
    console.log("Loading Commands...");
    client.commands = new Collection();
    commandEntries.forEach((commandEntry) => {
        client.commands.set(commandEntry.name, {data: commandEntry.command.data, execute: commandEntry.commande.execute })
        console.log(`Command Loaded: ${commandEntry.name}.`)
    })
    console.log("All commands loaded into Client.");
    return client.commands;
};

// -----------------------------------------------------------------------------------//