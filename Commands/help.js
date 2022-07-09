/** @format */

module.exports = {
	name: 'help',
	description: 'List all of all commands for TheWheelhaus Discord Bot',
	aliases: ['commands'],
	usage: 'All commands for TheWheelhaus Discord Bot',
	type: 'BOTH',
	slashCommandOptions: [],
	permission: 'SEND_MESSAGES',
	async run(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push('\nTo Get a Free Random Steam Game, Simply Type / `free `');
			data.push('\nTo Get a Shuffle Random Steam Game, Simply Type / `shuffle `');
			data.push('\nTo Get a List of Tags used, Simply Type / `list of tags`');
			data.push('\nTo Get a Genre and Shuffle, Simply Type / `genre` and then enter a genre and press enter ');
			data.push('\nTo Get a Category and Shuffle, Simply Type / `category` and then enter a category and press enter ');
			data.push('\nIf you found this Discord Bot useful. Why not show your support! https://top.gg/bot/539897313691172874');

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}
	},
};
