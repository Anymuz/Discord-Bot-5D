// commandProcessor: Collects imported command packages then returns an arraay of those commands
// ---------------------------------------------------------------------------------------------//
export default (commandPack) => {
    console.log("Preparing Commands...");
    let commandEntries = Object.entries(commandPack).map(commandEntry => {return{name: commandEntry[1].data.name, command: commandEntry[1]}}) ; 
    commandEntries = commandEntries.map(commandEntry => {if ('data' in commandEntry.command && 'execute' in commandEntry.command) {
        console.log(`Command processed: ${commandEntry.name}.`);
        return { data: commandEntry.command.data, execute: commandEntry.command.execute, jsonData: commandEntry.command.data.toJSON()} 
    } else {console.log(`[WARNING] The command '${commandEntry.name}' requires correct 'data' and 'execute' properties.`)}});
    console.log("All commands processed");
    return commandEntries;
};
// This array of commands can be used in loadCommands or deployCommands for both server and global
// ---------------------------------------------------------------------------------------------//