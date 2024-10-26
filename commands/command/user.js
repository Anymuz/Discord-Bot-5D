// command/utility/user.js
import { SlashCommandBuilder } from 'discord.js';
export default {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`I have been made aware of ${interaction.user.username}, who has been present since ${interaction.member.joinedAt}.`);
	},
	global: false
};