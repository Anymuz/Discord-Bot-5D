// parseConfig: Takes a bot config.json file and returns the server and client commands with server ID
// -------------------------------------------------------------------------------------------------//
export default async (config) => {
    const servers = config.servers
    const commands = config.commandPacks
    var serverIds = {}, serverPacks = [], botPacks = []
    if (servers){ 
        const serverConfigs = await Promise.all(servers.map(serverConfig => import(`#config/server/${serverConfig}`, { assert: { type: 'json' } })));
        serverPacks = [...new Set(serverConfigs.flatMap(serverConfig => serverConfig.default.commandPacks))];
        serverConfigs.forEach((serverConfig) => {serverIds[serverConfig.default.server] = serverConfig.default.id});
    } else {console.log("No Servers in bot config.")};
    if (!commands){console.log("Unable to read command packs from config!")}
    else {botPacks = commands}
    return {serverIds, serverPacks, botPacks}
};
// -------------------------------------------------------------------------------------------------//