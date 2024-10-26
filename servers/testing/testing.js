// #commands/server/testing
import config from "#config/server/testing" assert {type: 'json'}
import loadCommands from "#handlers/loadCommands"

let commands = config.commands;
let testing = loadCommands(commands)
export default testing;