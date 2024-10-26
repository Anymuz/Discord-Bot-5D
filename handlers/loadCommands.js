// loadCommands: Collects an array listing command packs and returns a single module of the commands
// -----------------------------------------------------------------------------------------------//
export default async (config) => {
    const importedCommands = await Promise.all(config.map(commandPack => import(`../commands/packs/${commandPack}.js`)));
    importedCommands.forEach((commandPack, index) => {console.log(`Loaded: ${config[index]}`)});
    const botCommands = importedCommands.reduce((commands, command) => {return{...commands, ...command}}, {});
    return botCommands
};
// -----------------------------------------------------------------------------------------------//
 