const { Message } = require('discord.js');

module.exports = {
	name: Message.messageCreate,
	async execute(message) {
		if (!message.isChatInputCommand()) return;

		const command = message.client.commands.get(message.commandName);

		if (!command) {
			console.error(`No command matching ${message.commandName} was found.`);
			return;
		}

		try {
			await command.execute(message);
		} catch (error) {
			console.error(`Error executing ${message.commandName}`);
			console.error(error);
		}
	},
};