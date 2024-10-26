// command/test/dummy.js
import { SlashCommandBuilder } from 'discord.js';
export default {
	data: new SlashCommandBuilder()
		.setName('dummy')
		.setDescription('for testing'),
	async execute(interaction) {
		await interaction.reply('dummy');
	},
};