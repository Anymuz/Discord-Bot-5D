// #setup/command
import { Collection } from 'discord.js';
import commandProcessor from '#handlers/commandProcessor'

// assignCommands: Collects the configuration of commands and assigns them to the client.
// -----------------------------------------------------------------------------------//
// export default (client, commands) => {
//     console.log("Loading Commands...");
//     client.commands = new Collection();
//     let commandEntries = Object.entries(commands).map(commandEntry => {return{name: commandEntry[1].data.name, command: commandEntry[1]}});  
//     commandEntries.forEach((commandEntry) => {if ('data' in commandEntry.command && 'execute' in commandEntry.command) {
//         let discordCommand = { data: commandEntry.command.data, execute: commandEntry.command.execute}
//         client.commands.set(commandEntry.name, discordCommand);
//         console.log(`Command Loaded: ${commandEntry.name}.`);
//     } else {console.log(`[WARNING] The command '${commandEntry.name}' requires correct 'data' and 'execute' properties.`)}});
//     console.log("All commands loaded into Client.");
//     return client.commands;
// }
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