// #setup/environment
import { config } from 'dotenv';

// loadEnvironment: Reads the configuration file and defines additional environmental variables.
// --------------------------------------------------------------------------------------------//
const loadEnvironment = config => {
    console.log("Loading Environment...")
    let stage, stageMsg;
    if (!config.staging){stage = 'development'} 
    else if (config.staging && !config.development){stage = 'testing'} 
    else if (config.staging && !config.development && !config.debug_mode) {stage = 'production'} 
    else {stage = 'development'};
    stageMsg = stage.charAt(0).toUpperCase() + stage.slice(1);
    return {STAGE: stage, STAGE_MESSAGE: stageMsg };
};
// --------------------------------------------------------------------------------------------//

// spawnEnvironment: Creates a new ENV environment and loads it into the bot with the config file.
// --------------------------------------------------------------------------------------------//
export default CONFIG => {
    const CFG = loadEnvironment(CONFIG);// load environment 
    const spawn = () => new config();
    console.log("Environment Spawnned.")
    if (CFG.STAGE) {spawn({path:`.env.${CFG.STAGE}`})}
    else {spawn({path: `.env`})}; 
    return { CONFIG: config, STAGE: CFG.STAGE, STAGE_MESSAGE: CFG.STAGE_MESSAGE };
};
// --------------------------------------------------------------------------------------------//