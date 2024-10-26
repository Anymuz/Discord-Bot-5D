// #commands/global
import commands from "#commands";
// Returns an object containing all global commands (for all servers)
let clientCommands = {};
for (let command in clientCommands){if(clientCommands[command].global){globalCommands[command] = clientCommands[command]}};
export default clientlCommands;