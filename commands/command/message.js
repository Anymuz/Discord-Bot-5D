// command/test/message.js
import { SlashCommandBuilder } from 'discord.js';
export default {
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('Sends a simple hello world message'),
	async execute(interaction) {
		await interaction.reply('Hello Discord.');
	},
	global: true
};