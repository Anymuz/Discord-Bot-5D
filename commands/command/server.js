import { SlashCommandBuilder } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		await interaction.reply(`I am in a server called ${interaction.guild.name}, I see there are ${interaction.guild.memberCount} members here.`);
	},
	global: true
};