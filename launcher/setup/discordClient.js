// #setup/client
import { Client, GatewayIntentBits } from "discord.js";

// discordClient: Takes a Client class from discord.js, constructs a new client.
// ---------------------------------------------------------------------------//
export default (client) => {
    console.log("Initalising Client...")
    client = new Client({intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]});
    return client;
};
// ---------------------------------------------------------------------------//