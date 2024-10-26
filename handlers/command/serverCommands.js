// #handlers/serverCommands
import commands from "#commands";

// serverCommands: Takes the command list from a server config file and returns the commands for that server
//--------------------------------------------------------------------------------------------------------//
export default (serverConfig) => {
    let serverCommands = {};
    for (let commandName of serverConfig){if(commands[commandName] && !commands[commandName].global){serverCommands[commandName]=commands[commandName]}};
    return serverCommands;
};
//--------------------------------------------------------------------------------------------------------//